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
      <h1 style="text-align:center;text-justify:auto;">${noticia.titulo}</h1>
      <h3 style="text-align:center;text-justify:auto;">${noticia.subtitulo}</h3>
      <div style="text-align:center;"><img src="${noticia.imagen}" alt="Imagen noticia" style="max-width:400px;width:100%;height:auto;margin:1em 0;display:inline-block;"></div>
      <div style="text-align:center;margin-top:2em;">
        <a href="${noticia.url}" target="_blank" style="color: rgb(5, 138, 247); text-decoration: none; font-weight: bold;">Ver noticia original</a>
      </div>
    `;
    main.innerHTML = html;
  });
