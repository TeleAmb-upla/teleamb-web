// Mostrar detalle de publicación según el ID en la URL

function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

const id = getParam('id');
let pub = null;

function renderDetalle(lang) {
  if (!pub) return;
  // Corregir ruta de imagen si es relativa y no es absoluta (http/https)
  let imgSrc = pub.Image;
  if (imgSrc && !imgSrc.startsWith('http')) {
    // Si empieza con './assets/', quitar el punto y anteponer /Test-Teleamb/ en producción
    if (imgSrc.startsWith('./assets/')) {
      imgSrc = (window.location.pathname.includes('/Test-Teleamb/'))
        ? '/Test-Teleamb/assets/' + imgSrc.substring('./assets/'.length)
        : imgSrc.substring(1); // quita el punto
    } else if (imgSrc.startsWith('/assets/')) {
      imgSrc = (window.location.pathname.includes('/Test-Teleamb/'))
        ? '/Test-Teleamb' + imgSrc
        : imgSrc;
    }
  }
  const extracto = typeof pub.Extracto === 'object'
    ? (pub.Extracto[lang] || pub.Extracto['es'] || Object.values(pub.Extracto)[0])
    : (pub.Extracto || 'Sin extracto disponible.');
  const titulo = typeof pub.Titulo === 'object'
    ? (pub.Titulo[lang] || pub.Titulo['es'] || Object.values(pub.Titulo)[0])
    : pub.Titulo;
  document.getElementById('detalle-publicacion').innerHTML = `
    <h2 class="mb-4 text-center" style="text-align:justify;">${titulo}</h2>
    ${imgSrc && imgSrc.trim() !== "" ? `<img src="${imgSrc}" class="img-fluid mb-4 d-block mx-auto" alt="Imagen detalle" style="max-height:350px;object-fit:contain;">` : ''}
    <p style="font-size:1.2em;text-align:justify;">${extracto}</p>
    <div class="mt-3">
      <a href="${pub.DOI}" target="_blank" class="btn btn-primary">Ver publicación original</a>
    </div>
  `;
}

const basePath = window.location.pathname.includes('/Test-Teleamb/')
  ? '/Test-Teleamb/publicaciones/publications.json'
  : 'publications.json';

fetch(basePath)
  .then(res => res.json())
  .then(data => {
    const publicaciones = Array.isArray(data[0]) ? data[0] : data;
    pub = publicaciones.find(p => p.ID === id);
    if (!pub) {
      document.getElementById('detalle-publicacion').innerHTML = '<p>No se encontró la publicación.</p>';
      return;
    }
    const langSelect = document.getElementById('lang-select');
    langSelect.addEventListener('change', () => renderDetalle(langSelect.value));
    renderDetalle(langSelect.value);
  })
  .catch(() => {
    document.getElementById('detalle-publicacion').innerHTML = '<p>Error cargando el detalle.</p>';
  });
