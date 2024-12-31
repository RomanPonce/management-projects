import { CargarPagina } from "./cargarPagina";
import { navButtons,content } from "./dom.js";
import "../css/styles.css";

// Cambiar el nombre de cada modulo

navButtons.forEach(button => {
  button.addEventListener("click", () => {
   content.appendChild(CargarPagina(button)) 
  })
});

