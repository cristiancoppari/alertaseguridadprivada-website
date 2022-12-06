const header = require("./header.js")

const indexData = {
  title: "Nosotros - Alertas Seguridad Privada",

  metaDescription: "Somos la mejor empresa de seguridad privada",

  header,

  hero: {
    image: {
      mobile: "/images/hero-home.png",
      tablet: "/images/hero-home.png",
      desktop: "/images/hero-home.png",
      desktopXL: "/images/hero-home.png",
    },
  },

  nosotros: {
    title: "Acerca de <strong>Alertas</strong> <br> Seguridad Privada",

    body: [
      "Somos una empresa formada por expertos en seguridad con <strong>más de 25 años de trayectoria</strong> en el mercado.",
      "Nuestra mayor virtud es saber entender a nuestros clientes, detectando de esta manera sus necesidades en concepto de seguridad, para poder brindarles la mejor alternativa a la hora de ofrecer nuestro servicio.",
      "Para lograrlo, contamos con un grupo de profesionales capacitados y debidamente elegidos por nuestro personal de RRHH.",
      "Experiencia, responsabilidad y confiabilidad, puesta al servicio de su seguridad."
    ],

    cta: {
      label: "Descargar brochure",
      link: "/images/brochure.pdf"
    }
  },

  nuestroEquipo: {
    title: "Nuestro equipo",

    image: "/images/services.png",

    text: [
      "Capacitamos a nuestro personal mediente el entrenamiento constante y los cursos requeridos para poder afrontar diferentes situaciones con la mejor eficacia posible.",
      "Le exigimos a nuestro equipo la maxima atención, cordialidad y respeto para así poder brindar un mejor servicio."
    ]
  },

  estamosParaAyudarte: {
    title: "Estamos <br>para ayudarte",

    text: [
      "Comunicate con nosotros llamando a nuestro teléfono, enviando un mensaje por WhatsApp o sino, envianos tu consulta completando el formulario, para que uno de nuestros asesores se ponga en contacto"
    ],

    image: "/images/security-guard.png",

    cta: {
      link: "/contacto",

      label: "CONTACTANOS"
    }
  }
}

module.exports = indexData;