// Datos de ejemplo
const perfiles = {
  freddy_saavedra: {
    nombre: "Freddy Saavedra",
    imagen: "../assets/img/team/Freddy_Saavedra.png",
    contacto: "freddy.saavedra@upla.cl", 
    descripcion: "Ingeniero Agrónomo, PhD. en Ciencias de la Tierra en Colorado State University.",
    texto: "Freddy Saavedra es un profesional apasionado por el estudio de la tierra y el medio ambiente. Su experiencia abarca múltiples proyectos de investigación y desarrollo en el área de la agronomía, con un enfoque en la sostenibilidad y la innovación tecnológica. Ha colaborado con equipos multidisciplinarios y ha liderado iniciativas que buscan mejorar la gestión de los recursos naturales. Su formación académica y su compromiso con la educación lo han llevado a participar en conferencias internacionales y a publicar artículos científicos. Freddy cree firmemente en el trabajo colaborativo y en la formación de nuevas generaciones de científicos."
  },
  ana_hernandez: {
    nombre: "Ana Hernández-Duarte",
    imagen: "../assets/img/team/Ana_Hernandez.png",
    contacto: "ana.hernandez@upla.cl",
    descripcion: "Arquitecta, MSc. en Desarrollo Regional y Medio Ambiente, PhD. en Ciencias Ambientales.",
    texto: "Ana Hernández-Duarte es arquitecta con una sólida formación en desarrollo regional y medio ambiente. Su trayectoria profesional incluye la planificación de proyectos urbanos sostenibles y la integración de criterios ambientales en el diseño arquitectónico. Ana ha trabajado en consultorías para organismos públicos y privados, promoviendo la eficiencia energética y la resiliencia urbana. Su interés por la investigación la ha llevado a profundizar en temas de cambio climático y adaptación territorial. Es una convencida de la importancia de la educación ambiental y participa activamente en iniciativas de divulgación científica."
  },
  marcelo_leguia: {
    nombre: "Marcelo Leguía",
    imagen: "../assets/img/team/Marcelo_Leguia.png",
    contacto: "marcelo.leguia@upla.cl",
    descripcion: "Geógrafo, MSc. en Áreas Silvestres y Conservación de la Naturaleza en Universidad de Chile.",
    texto: "Marcelo Leguía es geógrafo especializado en áreas silvestres y conservación de la naturaleza. Ha desarrollado investigaciones sobre la biodiversidad y la gestión de espacios protegidos, colaborando con instituciones nacionales e internacionales. Marcelo destaca por su capacidad de análisis espacial y su compromiso con la protección del patrimonio natural. Ha participado en proyectos de restauración ecológica y educación ambiental, contribuyendo a la formación de comunidades conscientes sobre la importancia de la conservación. Su trabajo busca equilibrar el desarrollo humano con la preservación de los ecosistemas."
  },
  valentina_contreras: {
    nombre: "Valentina Contreras",
    imagen: "../assets/img/team/Valentina_Contreras.png",
    contacto: "valentina.contreras@upla.cl ",
    descripcion: "Geógrafa de la Universidad de Playa Ancha.",
    texto: "Valentina Contreras es una geógrafa comprometida con el estudio del territorio y el desarrollo sostenible. Su experiencia incluye la participación en proyectos de cartografía, análisis ambiental y planificación territorial. Valentina ha trabajado junto a comunidades locales para promover el uso responsable de los recursos naturales y la adaptación al cambio climático. Su enfoque interdisciplinario le permite abordar los desafíos ambientales desde distintas perspectivas, integrando conocimientos técnicos y sociales. Es una defensora de la educación ambiental y la participación ciudadana en la gestión del territorio."
  },
  javier_medina: {
    nombre: "Javier Nicolas Medina Mendoza",
    imagen: "../assets/img/team/Javier_Medina.png",
    contacto: "javier.medina.men@upla.cl",
    descripcion: "Geólogo de la Universidad Andrés Bello (Viña del Mar).",
    texto:  "Soy Javier Medina, Geólogo de la Universidad Andrés Bello, con especialización en teledetección. Actualmente formo parte del Laboratorio de Teledetección Ambiental (TeleAmb), donde participo en el proyecto 'Observatorio Satelital de Nieve a Nivel Nacional', enfocado en el monitoreo y análisis de este componente de la criósfera. Me interesa la ciencia de datos y sus múltiples aplicaciones en el estudio de problemáticas ambientales. Me motiva aprender constantemente nuevas herramientas tecnológicas y colaborar en equipos interdisciplinarios, con el objetivo de comprender mejor los procesos que afectan nuestro entorno y contribuir, desde la ciencia, al desarrollo sostenible."
  },
  pablo_arancibia: {
    nombre: "Pablo Arancibia Ramos",
    imagen: "../assets/img/team/Pablo_Arancibia.jpg",
    descripcion:" Geógrafo de la Universidad de Playa Ancha",
    contacto: "pablo.arancibia.ramos@upla.cl",
    texto: "Pablo Arancibia Ramos, geógrafo especializado en análisis territorial y gestión ambiental. Experiencia en desarrollo local con proyectos como Genius Observatorio de Nieve y FIC Agrícola. Manejo de SIG, lenguajes de programación (Js/R) y bases de datos espaciales, relacionales y no relacionales (Json, SQL, SQLITE). Enfoque en análisis/visualización de datos geográficos, automatización y ciencia de datos geoespaciales para soluciones sostenibles."
  },
  gabriela_munoz: {
    nombre: "Gabriela Francisca Muñoz Vargas",
    imagen: "../assets/img/team/gabriela.png",
    contacto: "gabriela.munoz@upla.cl",
    descripcion: "Geógrafa de la Universidad de Playa Ancha.",
    texto: "Soy Gabriela Francisca Muñoz Vargas, geógrafa con mención en Gestión y Ordenamiento Territorial por la Universidad de Playa Ancha (2025). Actualmente me desempeño como asistente de investigación en el Laboratorio de Teledetección Ambiental, donde participo en proyectos relacionados con el monitoreo de dinámicas territoriales mediante el uso de sensores remotos. Tengo experiencia en el procesamiento de imágenes satelitales, la aplicación de técnicas avanzadas de percepción remota y el manejo de herramientas SIG, aplicadas tanto a la planificación territorial como al estudio de fenómenos ambientales. Mi interés profesional se centra en la aplicación de tecnologías de teledetección para contribuir a la gestión sostenible de territorios urbanos y ecosistemas vulnerables."
  },
  carlos_romero: {
    nombre: "Carlos Romero",
    imagen: "../assets/img/team/Carlos_Romero.png",
    contacto: "cromero@upla.cl",
    descripcion: "Geógrafo, MSc. en Gestion Ambiental, Estudiante de PhD. en Ciencias Ambientales.",
    texto: "Carlos Romero es geógrafo con especialización en gestión ambiental y estudios de doctorado en ciencias ambientales. Ha trabajado en proyectos de evaluación ambiental y planificación territorial, asesorando a organismos públicos y privados. Carlos destaca por su capacidad de análisis y su compromiso con la sostenibilidad. Ha participado en investigaciones sobre cambio climático y adaptación, y en la elaboración de políticas ambientales. Su objetivo es contribuir al desarrollo de soluciones innovadoras para los desafíos ambientales actuales."
  },
  antonia_flores: {
    nombre: "Antonia Flores",
    imagen: "../assets/img/team/antonia.png",
    contacto: "antonia.flores@alumnos.upla.cl",
    descripcion: "Estudiante de la Carrera de geografía, Universidad de Playa Ancha.",
    texto: "Antonia Flores es estudiante de geografía interesada en el análisis ambiental y la planificación territorial. Ha participado en proyectos universitarios relacionados con la gestión de recursos naturales y la educación ambiental. Antonia busca aplicar sus conocimientos en iniciativas que promuevan el desarrollo sostenible y la protección del medio ambiente. Su entusiasmo y dedicación la han llevado a colaborar en actividades de extensión y voluntariado. Cree en la importancia de la formación continua y el trabajo en equipo para enfrentar los desafíos ambientales."
  },
  yael_aguirre: {
    nombre: "Yael Aguirre",
    imagen: "../assets/img/team/Yael_aguirre.jpg",
    contacto: "yael.aguirre20@gmail.com",
    descripcion: "Geógrafa de la Universidad de Playa Ancha. Contacto: yael.aguirre20@gmail.com",
    texto: "Yael Aguirre es geógrafa con experiencia en gestión ambiental y participación comunitaria. Ha trabajado en proyectos de educación ambiental y desarrollo local, promoviendo la integración de la comunidad en la toma de decisiones. Yael destaca por su capacidad de comunicación y su compromiso con la equidad social. Ha participado en talleres y actividades de sensibilización ambiental, contribuyendo a la formación de ciudadanos responsables. Su objetivo es fomentar la conciencia ambiental y la participación activa en la gestión del territorio."
  },
  daniela_gonzalez: {
    nombre: "Daniela González",
    imagen: "../assets/img/team/Daniela_Gonzalez.JPG",
    contacto: "daniela.gonzalez@saf.cl",
    descripcion: "Geógrafa de la Universidad de Playa Ancha. Contacto: daniela.gonzalez@saf.cl",
    texto: "Daniela González es geógrafa con experiencia en gestión ambiental y educación. Ha participado en proyectos de análisis territorial y planificación ambiental, colaborando con equipos interdisciplinarios. Daniela se interesa por la educación ambiental y la formación de líderes comprometidos con la sostenibilidad. Ha desarrollado materiales educativos y coordinado talleres para estudiantes y comunidades. Cree en la importancia de la participación ciudadana y la equidad en la gestión del territorio."
  },
  marco_aurelio: {
    nombre: "Marco Aurelio",
    imagen: "../assets/img/team/marcoaurelio.avif",
    contacto: "Marco_aurelio@upla.cl",
    descripcion: "Emperador Romano de la Universidad de Playa Ancha.",
    texto: "Marco Aurelio, conocido como el 'Filósofo Emperador', es un destacado líder romano y filósofo estoico. Su reinado se caracterizó por la búsqueda de la justicia y la virtud, promoviendo la filosofía como guía para la vida pública y privada. Marco Aurelio escribió 'Meditaciones', una obra que refleja su pensamiento filosófico y su compromiso con el bienestar del imperio. Aunque su figura es histórica, su legado perdura como un ejemplo de liderazgo ético y reflexión personal."
  },
    Manuel_Narbona: {
    nombre: "Manuel Francisco Narbona Arregui",
    imagen: "../assets/img/team/Manuel_Narbona.png",
    contacto: "manuel@narbona.cl",
    descripcion: "Periodista de la Pontificia Universidad Catolica De Valparaiso.",
    texto: "¡Hola! Soy Manuel Narbona Arregui, periodista egresado de la Pontificia Universidad Católica de Valparaíso (PUCV). Me he especializado en Comunicación Científica, dedicando gran parte de mi carrera a divulgar conocimiento generado en proyectos de Investigación y Desarrollo (I+D). Mi experiencia incluye diseñar estrategias para posicionar hallazgos científicos, transformando información compleja en contenidos accesibles para diversos públicos. Trabajo vinculando a la comunidad académica con la sociedad, gestionando contenidos para instituciones y medios. Mi objetivo es facilitar el acceso a la ciencia, asegurando que su impacto trascienda del ámbito especializado y llegue a la población de manera clara."
  },

  // ...agrega más perfiles aquí si es necesario...
};

// Obtener el parámetro 'id' de la URL
function getPerfilId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

function renderPerfil() {
  const id = getPerfilId();
  const perfil = perfiles[id];
  const main = document.querySelector('main.Perfil');
  if (!perfil) {
    main.innerHTML = "<h2>Perfil no encontrado</h2>";
    return;
  }
  main.innerHTML = `
    <div class="perfil-container">
      <div class="perfil-img-col">
        <img src="${perfil.imagen}" alt="${perfil.nombre}" class="perfil-img">
        ${perfil.contacto ? `
          <div class="perfil-contacto">
            <span class="perfil-contacto-label">Contacto:</span>
            <a href="mailto:${perfil.contacto}" class="perfil-contacto-mail">${perfil.contacto}</a>
          </div>
        ` : ''}
      </div>
      <div class="perfil-info-col">
        <h1 class="perfil-nombre">${perfil.nombre}</h1>
        <p class="perfil-descripcion">${perfil.descripcion}</p>
        ${perfil.parrafo ? `<p class="perfil-parrafo">${perfil.parrafo}</p>` : ''}
        <p class="perfil-texto">${perfil.texto}</p>
      </div>
    </div>
  `;
  // Animación: agregar clase después de un pequeño delay para activar transición
  setTimeout(() => {
    const container = main.querySelector('.perfil-container');
    if (container) container.classList.add('perfil-animado');
  }, 50);
}

document.addEventListener('DOMContentLoaded', function() {
  // Agrega estilos para justificar el texto de los perfiles
  const style = document.createElement('style');
  style.innerHTML = `
    .perfil-descripcion,
    .perfil-parrafo,
    .perfil-texto {
      text-align: justify !important;
    }
  `;
  document.head.appendChild(style);

  renderPerfil();
});
