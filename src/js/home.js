import { content } from "./dom.js";

export function renderHome(){
  content.innerHTML = "";
  const homeConteiner  = document.createElement("div");
  homeConteiner.innerHTML = `<h1>La mejor carne</h1>`
  return homeConteiner;
}