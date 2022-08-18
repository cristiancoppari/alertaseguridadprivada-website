import Splide from "@splidejs/splide";
import module from "./modules";

// A dog
const dog = "Manolo";

// An array of dogs
const dogs = ["Melbaaaa"];

// Push to that array
dogs.push(dog);

console.log(module);

const carousel = new Splide(".splide").mount();

// const today = dayjs.get("date")
// console.log(today);

// Log the result
console.log(dogs);