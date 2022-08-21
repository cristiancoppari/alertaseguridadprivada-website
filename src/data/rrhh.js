const header = require("./header.js")

const indexData = {
  title: "RRHH - Alertas Seguridad Privada",

  metaDescription: "Somos la mejor empresa de seguridad privada",

  header,

  contacto: {
    title: "<strong>R.R.H.H</strong> | ¡Sumate al equipo!",

    body: [
      "Nuestro propósito es lograr que nuestros empleados se sientan orgullosos de pertenecer a Alertas Seguridad Privada.Si sos proactivo y responsable, y estás interesado en ser parte de nuestro equipo, completa el formulario y postúlate para formar parte de nuestro staff.",
      "No olvides de adjuntarnos tu C.V., haciendo click en el botón <strong>seleccionar archivo</strong>, situado en el formulario.",
    ]
  },

  hero: {
    // title: "LA MEJOR SOLUCIÓN <br> EN <strong>VIGILANCIA.</strong>",

    image: {
      mobile: "/images/hero-home.png",
      tablet: "/images/hero-home.png",
      desktop: "/images/hero-home.png",
      desktopXL: "/images/hero-home.png",
    },

    // cta: {
    //   link: "/servicios",

    //   label: "IR A SERVICIOS"
    // }
  },
}

module.exports = indexData;