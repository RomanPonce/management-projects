import { content } from "./dom.js";

export function renderBraches(){
  content.innerHTML = "";
  const brachesConteiner  = document.createElement("div");
  brachesConteiner.innerHTML = `<h1>Sucursales</h1>`
  return brachesConteiner;
}