import { taskContainer } from "../dom/selectors"
import addTaskBotton from "./addTaskBotton.js"

export default function createSeccion() {
  const elements = taskSeccionElements()
  appendTaskSeccion(...elements)
  addTaskBotton()
}

function taskSeccionElements(){
  const tituloToDo = document.createElement("h3")
  const addedToDo = document.createElement("div")
  const todo = document.createElement("div")
  const tituloPendiente = document.createElement("h3")
  const pendiente = document.createElement("div")
  const tituloHecho = document.createElement("h3")
  const hecho = document.createElement("div")
  
  addedToDo.id = "added-task"
  tituloToDo.textContent = "Tareas"
  tituloPendiente.textContent = "pendiente"
  tituloHecho.textContent = "Hecho"
  
  todo.appendChild(tituloToDo)
  todo.appendChild(addedToDo)
  pendiente.appendChild(tituloPendiente)
  hecho.appendChild(tituloHecho)

  todo.classList.add("todo")
  pendiente.classList.add("pendiente")
  hecho.classList.add("hecho")

  return [ todo, pendiente, hecho ]
}

function appendTaskSeccion(pendiente, haciendo, hecho){
  taskContainer.appendChild(pendiente) 
  taskContainer.appendChild(haciendo)
  taskContainer.appendChild(hecho)
}


