const header = require("../data/header.js")

const indexData = {
  title: "Alertas Seguridad Privada",

  metaDescription: "Somos la mejor empresa de seguridad privada",

  header,

  hero: {
    title: "ALERTAS SEGURIDAD PRIVADA",
    subtitle: "La mejor solución en <strong>vigilancia.</strong>",

    classes: "home",

    image: {
      mobile: "/images/hero-home.png",
      tablet: "/images/hero-home.png",
      desktop: "/images/hero-home.png",
      desktopXL: "/images/hero-home.png",
    },

    cta: {
      link: "/servicios",

      label: "IR A SERVICIOS"
    }
  },

  calidadSeguridadCompromiso: {
    title: "Calidad <br>Seguridad <br>Compromiso",

    text: [
      "Alertas Seguridad Privada. Experiencia responsabilidad y confiabilidad, puesta al servicio de su seguridad."
    ],

    image: "/images/services.png"
  },

  estamosParaAyudarte: {
    title: "Estamos <br>para ayudarte",

    text: [
      "Podes comunicarte con nosotros llamando a nuestras líneas telefónicas, enviándonos un WhatsApp o completando el formulario para que uno de nuestros asesores se ponga en contacto."
    ],

    image: "/images/security-guard.png",

    cta: {
      link: "/contacto",

      label: "CONTACTANOS"
    }
  }
}

module.exports = indexData;