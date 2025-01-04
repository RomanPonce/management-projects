import Task from "./class/task.js"
import Project from "./class/project.js"
import { formProject, projectTitle, projectDescription, containerTask } from "./dom/selectors.js" 

formProject.addEventListener("submit",startProject)


function startProject(event) {
  event.preventDefault();
  const {pjtTitleIn, pjtDescriptionIn} = getInputForm()
  const pjt = new Project(pjtTitleIn, pjtDescriptionIn)
  createProject(pjt)
  taskSeccion()
}

function getInputForm(){
  const pjtTitleIn = document.querySelector("#title-project").value
  const pjtDescriptionIn = document.querySelector("#description-project").value
  return {pjtTitleIn, pjtDescriptionIn}
}
function createProject(pjt){
  const elements = createElementsProject()
  title.textContent = pjt.projectTitle
  descripcion.textContent = pjt.description
  appendElement(elements)
}
function createElementsProject() {
  const title = document.createElement("h2")
  const descripcion = document.createElement("p")
  return {title, descripcion}
}
function appendElement(element) {
  projectTitle.appendChild(element.title)
  projectDescription.appendChild(element.descripcion)
}



function taskSeccion() {
  const elements = taskSeccionElements()
  appendTaskSeccion(...elements)
}

function taskSeccionElements{
  const pendiente = document.createElement("div")
  const haciendo = document.createElement("div")
  const hecho = document.createElement("div")
  return [pendiente,haciendo,hecho]
}

function appendTaskSeccion(a,b,c){
  containerTask.appendChild(a)
  containerTask.appendChild(b)
  containerTask.appendChild(c)
}

// Boton para añadir tareas

function btnAdd(){

  const conteiner = document.createElement("div")
  const btnAdd = document.createElement("button")

  document.querySelector(".pendiente")

}

function createTask(task) {

  const taskBox = document.createElement("article")
  const taskName = document.createElement("h3")
  const descripcion = document.createElement("p")
  const check = document.createElement("input")
  const fechaLimit = document.createElement("p")

  taskName.textContent = task.taskName
  descripcion.textContent = task.description
  check.textContent = task.check
  fechaLimit.textContent = task.endDate

  taskBox.appendChild(taskName)
  taskBox.appendChild(descripcion)
  taskBox.appendChild(check)
  taskBox.appendChild(fechaLimit)

  containerTask.appendChild(taskBox)
}

