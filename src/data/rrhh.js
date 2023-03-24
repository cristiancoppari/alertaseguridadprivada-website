const header = require("./header.js")

const indexData = {
  script: "/javascript/rrhh.js",

  title: "RRHH - Alertas Seguridad Privada",

  metaDescription: "Somos la mejor empresa de seguridad privada",

  header,

  contacto: {
    title: "<strong>R.R.H.H</strong> | ¡Sumate al equipo!",

    body: [
      "Si estás interesado en formar parte de la empresa completá el formulario de abajo y adjunta tu Currículum. El mismo será evaluado y en caso de precisarlo nos pondremos en contacto.",
      "No olvides de adjuntarnos tu C.V., haciendo click en el botón <strong>seleccionar archivo</strong>, situado en el formulario.",
    ]
  },

  hero: {
    image: {
      mobile: "/images/hero-rrhh-mobile.webp",
      tablet: "/images/hero-rrhh-mobile.webp",
      desktop: "/images/hero-rrhh-desktop.webp",
      desktopXL: "/images/hero-rrhh-desktopxl.webp",
    },
  },
}

module.exports = indexData;