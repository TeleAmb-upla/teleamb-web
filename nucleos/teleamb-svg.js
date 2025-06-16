// Solo carga el SVG y lo muestra, sin interactividad ni tooltips
document.addEventListener("DOMContentLoaded", function () {
  fetch('assets/img/TELEAMB-02.svg')
    .then(res => res.text())
    .then(svgText => {
      document.getElementById('teleamb-svg-container').innerHTML = svgText;

      // Efecto hover para grupos específicos (todos a la vez)
      const zonas = [
        "montaña",
        "ciudad",
        "vegetacion",
        "agricultura",
        "costa"
      ];

      // Agrega estilos globales para animación y borde plateado solo a rect
      const style = document.createElement('style');
      style.innerHTML = `
        .zona-animada {
          animation: palpitar 1s infinite alternate;
        }
        .zona-animada-rect {
          stroke: #e0e0e0 !important;
          stroke-width: 4px !important;
          filter: drop-shadow(0 0 8px #b0b0b0);
        }
        .zona-borde-rotante {
          stroke-width: 4px !important;
          stroke-linecap: round;
          stroke-dasharray: 40 10;
          animation: borde-rotar 1.2s linear infinite;
        }
        .zona-borde-rotante-montaña { stroke: #003f63 !important; filter: drop-shadow(0 0 8px #003f63);}
        .zona-borde-rotante-ciudad { stroke: #de5e2f !important; filter: drop-shadow(0 0 8px #de5e2f);}
        .zona-borde-rotante-vegetacion { stroke: #2bba77 !important; filter: drop-shadow(0 0 8px #2bba77);}
        .zona-borde-rotante-agricultura { stroke: #ebb324 !important; filter: drop-shadow(0 0 8px #ebb324);}
        .zona-borde-rotante-costa { stroke: #00bbca !important; filter: drop-shadow(0 0 8px #00bbca);}
        @keyframes palpitar {
          0% { transform: scale(1);}
          100% { transform: scale(1.08);}
        }
        @keyframes borde-rotar {
          100% { stroke-dashoffset: -50; }
        }
      `;
      document.head.appendChild(style);

      // Mensajes y enlaces para cada zona
      const zonaTexts = {
        montaña: "Zona de montaña",
        ciudad: "Zona urbana",
        vegetacion: "Vegetación natural",
        agricultura: "Zona agrícola",
        costa: "Zona costera"
      };
      // const zonaLinks = { ...existing code... };

      // Nuevo: Contenido HTML personalizado para cada zona
      const zonaContents = {
        montaña: `
          <h2>Montaña</h2>
<p>Las zonas de montaña son regiones con paisajes únicos y ecosistemas frágiles. El monitoreo continuo con tecnología satelital y drones nos ha permitido observar cambios en la cobertura de nieve como efecto del cambio climático, lo cual es vital para la gestión del agua.</p>
        `,
        ciudad: `
          <h2>Ciudad</h2>
<p>Las áreas urbanas concentran población, infraestructura y actividad económica. El monitoreo satelital y con drones en ciudades nos ha permitido evaluar el crecimiento urbano, la calidad del aire, las islas de calor y la planificación territorial sostenible para mejorar la calidad de vida y reducir riesgos.</p>
        `,
        vegetacion: `
          <h2>Vegetación Natural</h2>
<p>Las regiones cubiertas por vegetación natural son esenciales para la biodiversidad, la captura de carbono y la regulación del clima. Estamos preparando un monitoreo continuo para ayudar a detectar deforestación, incendios forestales y degradación del ecosistema.</p>
        `,
        agricultura: `
          <h2>Agricultura</h2>
<p>Las zonas agrícolas son clave para la seguridad alimentaria. Gracias al monitoreo con satélites y drones se puede evaluar la salud de los cultivos, el uso del suelo, y optimizar el riego y fertilización, promoviendo una agricultura más eficiente y sostenible.</p>
        `,
        costa: `
          <h2>Costa y Oceanos</h2>
<p>Las áreas costeras son ecosistemas dinámicos con gran valor ecológico y económico. El monitoreo de costas y océanos nos ha permitido estudiar el efecto de las desembocaduras de los ríos en las dinámicas costeras.</p>
        `
      };

      // Crea el cuadro de texto flotante
      const infoBox = document.createElement('div');
      infoBox.style.position = 'absolute';
      infoBox.style.background = '#fff';
      infoBox.style.color = '#222';
      infoBox.style.padding = '12px 18px';
      infoBox.style.borderRadius = '10px';
      infoBox.style.fontSize = '16px';
      infoBox.style.zIndex = '900'; // Menor que el header
      infoBox.style.boxShadow = '0 4px 24px rgba(0,0,0,0.18)';
      infoBox.style.display = 'none';
      infoBox.style.maxWidth = '320px';
      infoBox.style.minWidth = '220px';
      infoBox.style.textAlign = 'justify';
      infoBox.style.border = '1px solid #ccc';
      document.body.appendChild(infoBox);

      // Oculta el cuadro al hacer click fuera
      document.addEventListener('mousedown', function(e) {
        if (!infoBox.contains(e.target)) {
          infoBox.style.display = 'none';
        }
      });

      zonas.forEach(id => {
        // Selecciona <rect>, <circle> y <path> con el id correspondiente
        const elements = document.querySelectorAll(
          `#teleamb-svg-container rect[id='${id}'],` +
          `#teleamb-svg-container circle[id='${id}'],` +
          `#teleamb-svg-container path[id='${id}']`
        );
        elements.forEach(el => {
          el.classList.add('zona-animada');
          el.style.transition = "transform 0.3s";
          el.style.cursor = "pointer"; // Cambia el cursor a mano
          if (el.tagName.toLowerCase() === 'rect') {
            el.classList.add('zona-animada-rect');
          }
        });

        // Controla si el grupo está activo para evitar bugs de animación
        let groupActive = false;
        let mouseInside = 0; // contador de elementos con mouseover
        let zoomed = false; // Nuevo flag para dejar el zoom fijo tras el primer hover

        // Funciones para aplicar y quitar el zoom a todos los elementos del grupo
        function zoomInGroup() {
          if (zoomed) return;
          elements.forEach(el => {
            el.classList.remove('zona-animada');
            el.style.transform = "scale(1.08)";
            if (el.tagName.toLowerCase() === 'rect') {
              el.classList.remove('zona-animada-rect');
              el.classList.add('zona-borde-rotante');
              // Quita cualquier color anterior
              el.classList.remove(
                'zona-borde-rotante-montaña',
                'zona-borde-rotante-ciudad',
                'zona-borde-rotante-vegetacion',
                'zona-borde-rotante-agricultura',
                'zona-borde-rotante-costa'
              );
              // Aplica el color según el id
              if (id === 'montaña') el.classList.add('zona-borde-rotante-montaña');
              else if (id === 'ciudad') el.classList.add('zona-borde-rotante-ciudad');
              else if (id === 'vegetacion') el.classList.add('zona-borde-rotante-vegetacion');
              else if (id === 'agricultura') el.classList.add('zona-borde-rotante-agricultura');
              else if (id === 'costa') el.classList.add('zona-borde-rotante-costa');
            } else {
              el.classList.remove(
                'zona-borde-rotante',
                'zona-borde-rotante-montaña',
                'zona-borde-rotante-ciudad',
                'zona-borde-rotante-vegetacion',
                'zona-borde-rotante-agricultura',
                'zona-borde-rotante-costa'
              );
            }
          });
          zoomed = true;
        }
        function zoomOutGroup() {
          // No hace nada: el zoom queda fijo tras el primer hover
        }

        // Añade listeners a cada elemento del grupo para que todos se animen juntos
        elements.forEach(el => {
          el.addEventListener("mouseenter", zoomInGroup);
          el.addEventListener("mouseleave", zoomOutGroup);

          // Mostrar infoBox al hacer click, junto al mouse (posición absoluta respecto al documento)
          el.addEventListener("click", function (e) {
            // Detecta si está en GitHub Pages
            const basePath = window.location.hostname.includes("github.io")
              ? "/Test-Teleamb/nucleos/area.html"
              : "nucleos/area.html";
            const verMasUrl = `${basePath}?id=${id}`;
            infoBox.innerHTML = `
              <div style="text-align:justify;">
                ${zonaContents[id] || `<span>${zonaTexts[id] || id}</span>`}
              </div>
              <div style="margin-top:10px;text-align:center;">
                <a href="${verMasUrl}" class="zona-vermas-btn" style="display:inline-block;padding:7px 14px;background:#1976d2;color:#fff;border-radius:6px;text-decoration:none;font-weight:500;font-size:15px;">Ver más</a>
              </div>
            `;
            infoBox.style.display = 'block';
            // Usa pageX/pageY para que el cuadro quede fijo respecto al documento, no a la ventana
            let x = e.pageX + 18;
            let y = e.pageY + 18;
            const padding = 12;
            const boxWidth = infoBox.offsetWidth || 250;
            const boxHeight = infoBox.offsetHeight || 60;
            if (x + boxWidth > document.documentElement.scrollWidth - padding) {
              x = document.documentElement.scrollWidth - boxWidth - padding;
            }
            if (y + boxHeight > document.documentElement.scrollHeight - padding) {
              y = document.documentElement.scrollHeight - boxHeight - padding;
            }
            infoBox.style.position = 'absolute';
            infoBox.style.left = x + 'px';
            infoBox.style.top = y + 'px';
            e.stopPropagation();
          });
        });
      });
    });
});
