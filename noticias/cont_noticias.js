// Lee el id de la noticia de la URL y muestra el contenido correspondiente
fetch('noticias.json')
  .then(res => res.json())
  .then(noticias => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const noticia = noticias.find(n => n.id === id);
    const main = document.getElementById('noticia-contenido');
    if (!main) return;
    if (!noticia) {
      main.innerHTML = '<h2>Noticia no encontrada</h2>';
      return;
    }
    let html = `
      <div style="color: #888; margin-bottom: 1em; text-align: center;">
        ${new Date(noticia.fecha).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })} • Autor: ${noticia.autor}
      </div>
    `;
    noticia.contenido.forEach(bloque => {
      if (bloque.tipo === 'titulo') {
        html += `<h1 style="text-align:center;text-justify:auto;">${bloque.texto}</h1>`;
      } else if (bloque.tipo === 'subtitulo') {
        html += `<h3 style="text-align:center;text-justify:auto;">${bloque.texto}</h3>`;
      } else if (bloque.tipo === 'parrafo') {
        html += `<p style="text-align:justify;margin-left:auto;margin-right:auto;max-width:700px;">${bloque.texto}</p>`;
      } else if (bloque.tipo === 'imagen') {
        // Asegura que la ruta sea absoluta desde la raíz
        let imgSrc = bloque.src.startsWith('/') ? bloque.src : '/' + bloque.src;
        html += `<div style="text-align:center;"><img src="${imgSrc}" alt="${bloque.alt || ''}" style="max-width:400px;width:100%;height:auto;margin:1em 0;display:inline-block;"></div>`;
      }
    });
    main.innerHTML = html;
  });
