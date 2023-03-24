const header = require("../data/header.js")

const serviciosData = {
  title: "Alertas Seguridad Privada",

  metaDescription: "Somos la mejor empresa de seguridad privada",

  script: "/javascript/servicios.js",

  header,

  hero: {
    image: {
      mobile: "/images/hero-segfisica-mobile.webp",
      tablet: "/images/hero-segfisica-mobile.webp",
      desktop: "/images/hero-segfisica-desktop.webp",
      desktopXL: "/images/hero-segfisica-desktopxl.webp",
    },
  },

  cards: [
    {
      title: "SERVICIO",
      label: "Seguridad Física",
      link: "/servicios/seguridad-fisica",
      class: "seguridad-fisica"
    },
    {
      title: "SERVICIO",
      label: "Seguridad Electrónica",
      link: "/servicios/seguridad-electronica",
      class: "seguridad-electronica"
    },
  ],

  section1: {
    title: "Nuestros <strong>Servicios</strong><br> de Seguridad Privada",
    subtitle: "SERVICIOS A MEDIDA",

    content: {
      title: "Seguridad Física",
      text: [
        "El rol de la vigilancia física es la de garantizar la seguridad y protección del lugar donde desempeña su trabajo y de las personas que se encuentran en él, sea empresa, edificios residenciales, obras en construcción o cualquier otra propiedad privada.",
        "Para cumplir con sus funciones su deber es controlar los accesos en todo momento, monitorear las áreas a su alcance, cumplir las normativas como también exigir que se cumplan y dar respuesta inmediata ante cualquier situación de emergencia que pueda ocasionarse."
      ],

      items: [
        {
          id: "propiedades-privadas",
          label: "SERVICIO DE VIGILANCIA A PROPIEDADES PRIVADAS",
          text: "Brindamos seguridad física en propiedades horizontales, obras en construcción, fábricas e instituciones, entre otras.",
        },
        {
          id: "mercancia-en-transito",
          label: "CUSTODIA DE MERCANCÍA EN TRÁNSITO",
          text: "Protección y custodia en el traslado de materiales y objetos de valor.",
        },
        {
          id: "supervisores",
          label: "SUPERVISORES EN LOS HORARIOS DE SERVICIO",
          text: "Contamos con supervisores que realizan sus recorridos en los horarios de servicio para garantizar un mejor desempeño de los guardias.",
        },
        {
          id: "urgencias",
          label: "ATENCIÓN DE URGENCIAS LAS 24HS.",
          text: "Ante cualquier urgencia contamos con lineas telefónicas para que puedan comunicarse las 24 horas.",
        },
      ]
    }
  },

  section2: {
    title: "¿Dónde?",
    texts: [
      "Ofrecemos nuestro servicio adaptable a cualquier necesidad del cliente, en las siguientes áreas:"
    ],

    carousel: {
      id: "carousel-seguridad-fisica",
      images: [
        "/images/foto1-segfisica.webp",
        "/images/foto2-segfisica.webp",
        "/images/foto3-segfisica.webp",
      ]
    }
  },

  estamosParaAyudarte: {
    title: "Estamos <br>para ayudarte",

    text: [
      "Comunicate con nosotros llamando a nuestro teléfono, enviando un mensaje por WhatsApp o envianos tu consulta completando el formulario para que uno de nuestros asesores se ponga en contacto."
    ],

    cta: {
      link: "/contacto",

      label: "COTIZAR SERVICIO"
    }
  },
}

module.exports = serviciosData;