import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderBraches } from "./braches.js";
import { renderAbout } from "./about.js";

// Se puede mejorar
// Cambiando por un objeto map

export function CargarPagina(button) {
  if(button.value === "home") {
    return renderHome();
  } else if (button.value === "menu") {
    return renderMenu();
  } else if (button.value === "braches") {
    return renderBraches();
  } else if (button.value === "about") {
    return renderAbout();
  }
}