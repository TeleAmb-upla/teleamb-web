// Cargar y mostrar publicaciones agrupadas por año en tarjetas tipo noticia

fetch('../publicaciones/publications.json')
  .then(res => res.json())
  .then(data => {
    const publicaciones = Array.isArray(data[0]) ? data[0] : data;
    const porAño = {};
    publicaciones.forEach(pub => {
      if (!pub.Año) return;
      if (!porAño[pub.Año]) porAño[pub.Año] = [];
      porAño[pub.Año].push(pub);
    });
    const años = Object.keys(porAño).sort((a, b) => b - a);
    const main = document.getElementById('publicaciones-contenido');

    let html = '';
    años.forEach(año => {
      html += `<h2 class="text-center" style="margin-top:2em;">${año}</h2>
      <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px;">`;
      porAño[año].forEach(pub => {
        const img = pub.Image || '../assets/img/placeholder.png';
        // Obtener el extracto en español o el primer idioma disponible
        let resumenText = '';
        if (typeof pub.Extracto === 'object' && pub.Extracto !== null) {
          resumenText = pub.Extracto.es || Object.values(pub.Extracto)[0] || '';
        } else if (typeof pub.Extracto === 'string') {
          resumenText = pub.Extracto;
        }
        // Mostrar solo las primeras 22 palabras del extracto
        const resumen = resumenText.split(' ').slice(0, 22).join(' ') + (resumenText.split(' ').length > 22 ? '...' : '');
        // Obtener el título en inglés o el primer idioma disponible
        let tituloText = '';
        if (typeof pub.Titulo === 'object' && pub.Titulo !== null) {
          tituloText = pub.Titulo.en || Object.values(pub.Titulo)[0] || '';
        } else if (typeof pub.Titulo === 'string') {
          tituloText = pub.Titulo;
        }
        // Autor: poner en negrita los nombres clave
        const autoresBold = [
          "Freddy A. Saavedra",
          "Marcelo Leguía Cruz",
          "Carlos Romero González",
          "Ana Hernández-Duarte"
        ];
        let autorHtml = '';
        if (pub.Autor) {
          autorHtml = pub.Autor.split(',').map(nombre => {
            const clean = nombre.trim();
            if (autoresBold.includes(clean)) {
              return `<b>${clean}</b>`;
            }
            return clean;
          }).join(', ');
        }
        html += `
        <div style="width:366px;height:500px;display:flex;flex-direction:column;">
          <div class="card shadow-sm h-100" style="border-radius:16px;width:366px;min-width:366px;max-width:366px;height:500px;display:flex;flex-direction:column;">
            <img src="${img}" class="card-img-top" alt="Imagen publicación" style="object-fit:cover;width:366px;height:200px;border-top-left-radius:16px;border-top-right-radius:16px;">
            <div class="card-body d-flex flex-column" style="flex:1 1 auto;overflow:hidden;">
              <h5 class="card-title" style="font-weight:700;text-align:justify;">${tituloText}</h5>
              <div style="color:#888;font-size:0.95em;margin-bottom:0.5em;">${autorHtml ? 'Autor: ' + autorHtml : ''}</div>
              <p class="card-text" style="color:#555;font-size:1rem;flex:1 1 auto;overflow:auto;text-align:justify;">${resumen}</p>
              <div class="mt-auto">
                <a href="publicaciones/detalle.html?id=${pub.ID}" class="card-link" style="color:#1976d2;font-weight:500;text-decoration:none;">Leer más <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        `;
      });
      html += '</div>';
    });

    document.querySelector('main.Area').innerHTML = html;
  })
  .catch(err => {
    document.querySelector('main.Area').innerHTML = '<p>Error cargando publicaciones.</p>';
    console.error(err);
  });
