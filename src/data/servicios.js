const header = require("../data/header.js")

const serviciosData = {
  title: "Alertas Seguridad Privada",

  metaDescription: "Somos la mejor empresa de seguridad privada",

  header,

  hero: {
    title: "LA MEJOR SOLUCIÓN <br> EN <strong>VIGILANCIA.</strong>",

    classes: "servicios",

    image: {
      mobile: "/images/hero-servicios-mobile.jpg",
      tablet: "/images/hero-servicios-mobile.jpg",
      desktop: "/images/hero-servicios-desktop.jpg",
      desktopXL: "/images/hero-servicios-desktopxl.jpg",
    },

    // cta: {
    //   link: "/servicios",

    //   label: "IR A SERVICIOS"
    // }
  },

  calidadSeguridadCompromiso: {
    title: "Calidad <br>Seguridad <br>Compromiso",

    text: [
      "Alertas Seguridad Privada. Experiencia, responsabilidad y confiabilidad, puesta al servicio de su seguridad."
    ],

    image: "/images/services.png"
  },

  estamosParaAyudarte: {
    title: "Estamos <br>para ayudarte",

    text: [
      "Comunicate con nosotros llamando a nuestro teléfono, enviando un mensaje por WhatsApp o sino, envianos tu consulta completando el formulario, para que uno de nuestros asesores se ponga en contacto"
    ],

    cta: {
      link: "/contacto",

      label: "COTIZAR SERVICIO"
    }
  }
}

module.exports = serviciosData;