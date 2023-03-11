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

  nuestrosServiciosDeSeguridadPrivada: {
    title: "Nuestros <strong>Servicios</strong> <br> de Seguridad Privada",

    subtitle: "SERVICIOS A MEDIDA",

    texts: [
      "Partiendo de un detallado análisis de los potenciales riesgos de nuestros clientes y/o prospectos, diseñamos una estrategía a medida de lo requerido por ellos y sus reales necesidades, logrando de esta manera un resultado más eficaz en la gestión de seguridad. Para tal fin, nuestra oferta de servicios se desarrollan mediante la combinación de los siguientes factores: vigilancia presencial, rondas internas/perimetrales, supervisores en horarios de turnos, protección de bienes y control de accesos.",
      "Además, el aporte de nuestra tecnología en los puestos de vigilancia ortorga un mayor rendimiento de nuestros guardias para desempeñar sus tareas."
    ],

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
      {
        title: "ACCESORIOS",
        label: "Adicionales Electrónica",
        link: "/servicios/adicionales-electronica",
        class: "adicionales-electronica"
      },
    ]
  },

  comoFuncionaNuestroSistema: {
    title: "¿Cómo funciona <br> nuestro <strong>Sistema</strong>?",

    cards: [
      {
        number: "01",
        label: "Detección",
        text: "Cada cliente o propiedad privada cuenta con diferentes necesidades a la hora de requerir un servicio de seguridad privada; nosotros las detectamos y buscamos la mejor solución.",
      },
      {
        number: "02",
        label: "Recepción",
        text: "Una vez recibidas las inquietudes de nuestros clientes, nuestros asesores las trasladarán al equipo de trabajo para poder satisfacerlos y por sobre todo, se sientan protegidos.",
      },
      {
        number: "03",
        label: "Prevención",
        text: "Otorgando un protocolo de seguridad adaptable a cada necesidad, instruimos a nuestro personal para prevenir cualquier situación de riesgo dentro de la propiedad privada.",
      },
      {
        number: "04",
        label: "Respuesta",
        text: "Nuestro equipo de guardias se encuentra preparado para afrontar diferentes tareas con mayor eficacia gracias a las normas y las pautas establecidas, dando respuesta a la brevedad.",
      }
    ]
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