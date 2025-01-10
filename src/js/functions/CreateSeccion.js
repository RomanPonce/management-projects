import { taskContainer } from "../dom/selectors"
import addTaskBotton from "./addTaskBotton.js"

export default function createSeccion() {
  const elements = taskSeccionElements()
  appendTaskSeccion(...elements)
  addTaskBotton()
}

function taskSeccionElements(){
  const pendiente = document.createElement("div")
  pendiente.classList.add("pendiente")
  const haciendo = document.createElement("div")
  const hecho = document.createElement("div")
  return [ pendiente, haciendo, hecho ]
}

function appendTaskSeccion(pendiente, haciendo, hecho){
  taskContainer.appendChild(pendiente) 
  taskContainer.appendChild(haciendo)
  taskContainer.appendChild(hecho)
}


