import { content } from "./dom.js";
import AboutImg from "../assets/img/restaurant.jpg";

export function renderAbout() {
  const hola = `La historia de los restaurantes se remonta a 1765, cuando el mesonero Boulanger abrió un establecimiento en París, Francia, que se considera el primer restaurante del mundo. Boulanger servía varios platillos acompañados de vino en un local llamado Champs d'Oiseau.`;
  content.innerHTML = "";

  const aboutConteiner = document.createElement("div");
  aboutConteiner.classList.add("about-container");

  aboutConteiner.insertAdjacentHTML(
    "beforeend",
    `
    <h2 class="restaurant--title">NOMBRE DEL RESTAURANTE</h3>
    <h3 class="about--title">About us</h2>
    <p class="parrafo">${hola}</p>`
  );

  // Add the image to our existing div.

  const myIcon = document.createElement("img");
  myIcon.src = AboutImg;

  aboutConteiner.appendChild(myIcon);

  return aboutConteiner;
}
