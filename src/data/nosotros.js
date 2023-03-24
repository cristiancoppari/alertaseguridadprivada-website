const header = require("./header.js")

const indexData = {
  title: "Nosotros - Alertas Seguridad Privada",

  metaDescription: "Somos la mejor empresa de seguridad privada",

  header,

  hero: {
    image: {
      mobile: "/images/hero-nosotros-mobile.webp",
      tablet: "/images/hero-nosotros-mobile.webp",
      desktop: "/images/hero-nosotros-desktop.webp",
      desktopXL: "/images/hero-nosotros-desktopxl.webp",
    },
  },

  nosotros: {
    title: "Acerca de <strong>Alertas</strong> <br> Seguridad Privada",

    body: [
      "Somos una empresa de seguridad privada especializada en vigilancia, prevención y protección de bienes; fundada hace más de veinte años por expertos en la materia, con alta experiencia desde los años 90 en el rubro.",
      "Nuestro principal compromiso es identificar las reales necesidades de los clientes a la hora de contratar nuestro servicio de seguridad privada.  Esto nos permite poder ofrecer un servicio a la altura de las expectativas que desean.",
      "Para lograrlo, contamos con un grupo de trabajadores altamente seleccionados y capacitados por nuestros profesionales, que cuentan con las herramientas necesarias para poder llevar a cabo los mejores procesos de selección del personal.",
    ],

    cta: {
      label: "Descargar brochure",
      link: "/images/brochure.pdf"
    }
  },

  nuestroEquipo: {
    title: "Nuestro equipo",

    image: "/images/services.webp",

    text: [
      "Capacitamos a nuestro personal de vigilancia mediante el entrenamiento constante y los cursos requeridos para poder cumplir con sus tareas con mayor eficacia.",
      "Le exigimos a nuestro equipo la máxima atención, compromiso, cordialidad y respeto a la hora de desempeñar sus tareas."
    ]
  },

  estamosParaAyudarte: {
    title: "Estamos <br>para ayudarte",

    text: [
      "Podes comunicarte con nosotros llamando a nuestras líneas telefónicas, enviándonos un WhatsApp o completando el formulario para que uno de nuestros asesores se ponga en contacto."
    ],

    image: "/images/security-guard.webp",

    cta: {
      link: "/contacto",

      label: "CONTACTANOS"
    }
  }
}

module.exports = indexData;