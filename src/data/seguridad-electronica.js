const header = require("../data/header.js")

const serviciosData = {
  title: "Alertas Seguridad Privada",

  metaDescription: "Somos la mejor empresa de seguridad privada",

  script: "/javascript/servicios.js",

  header,

  hero: {
    image: {
      mobile: "/images/hero-segelec-mobile.jpg",
      tablet: "/images/hero-segelec-mobile.jpg",
      desktop: "/images/hero-segelec-desktop.jpg",
      desktopXL: "/images/hero-segelec-desktopxl.jpg",
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
      title: "Seguridad Electrónica",
      text: [
        "La Vídeo Vigilancia Permite brindar un servicio de monitoreo remoto de imágenes en tiempo real. Un sistema ágil y efectivo para controlar su negocio o propiedad desde cualquier lugar, accediendo a través del dispositivo electrónico de su preferencia."
      ],

      items: [
        {
          id: "sistema-de-ccta-integrado",
          label: "SISTEMA DE CCTV INTEGRADO",
          text: "Lo incorporamos como herramienta adicional sin costo al puesto de trabajo para que el guardia pueda desempeñar mejor sus tareas de vigilancia.",
        },
        {
          id: "control-de-acceso",
          label: "CONTROL DE ACCESO",
          text: "Por medio de la videovigilancia es posible controlar en tiempo real los diversos accesos a una propiedad.",
        },
        {
          id: "mantenimiento",
          label: "MANTENIMIENTO DE SISTEMA DE CCTV",
          text: "Nuestros técnicos realizan los mantenimientos necesarios de nuestros equipos de seguridad para garantizar un buen funcionamiento.",
        },
      ]
    }
  },

  // section2: {
  //   title: "Nuestras Cámaras",
  //   texts: [
  //     "Instalamos cámaras de alta calidad.",
  //     "Trabajamos con cáaras reconocidas en el mercado."
  //   ],

  //   carousel: {
  //     id: "carousel-seguridad-fisica",
  //     images: [
  //       "/images/foto1-segfisica.jpg",
  //       "/images/foto2-segfisica.jpg",
  //       "/images/foto3-segfisica.jpg",
  //     ]
  //   }
  // },

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