import { Splide } from "@splidejs/splide";

const carouselElement = document.querySelector("#serviciosCarousel")

window.addEventListener("load", () => {
    console.log("servicios.js init")

    const carouselConfig = {
        type: "loop",
        perPage: 1,
        perMove: 1,
        gap: "1rem",
        mediaQuery: "min",

        breakpoints: {
            768: {
                perPage: 3
            }
        }
    }

    const carousel = new Splide(carouselElement, carouselConfig).mount()
})