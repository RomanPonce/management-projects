import { taskContainer } from "../dom/selectors"
import addTaskBotton from "./addTaskBotton.js"

export default function createSeccion() {
  const elements = taskSeccionElements()
  appendTaskSeccion(...elements)
  addTaskBotton()
}

function taskSeccionElements(){
  const addedTask = document.createElement("div")
  const pendiente = document.createElement("div")
  const haciendo = document.createElement("div")
  const hecho = document.createElement("div")

  addedTask.id = "added-task"
  pendiente.appendChild(addedTask)


  pendiente.classList.add("pendiente")
  pendiente.classList.add("item")

  haciendo.classList.add("haciendo")
  hecho.classList.add("hecho")

  return [ pendiente, haciendo, hecho ]
}

function appendTaskSeccion(pendiente, haciendo, hecho){
  taskContainer.appendChild(pendiente) 
  taskContainer.appendChild(haciendo)
  taskContainer.appendChild(hecho)
}


