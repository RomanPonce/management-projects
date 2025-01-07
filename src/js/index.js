import Task from "./class/task.js"
import Project from "./class/project.js"
import { formProject, projectTitle, projectDescription, containerTask } from "./dom/selectors.js" 

formProject.addEventListener("submit",startProject)

// Aclaración. pjt = project

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
  elements.title.textContent = pjt.projectTitle
  elements.descripcion.textContent = pjt.description
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

function taskSeccionElements(){
  const pendiente = document.createElement("div")

  pendiente.classList.add("pendiente") // Esto se tiene que cambiar
  
  const haciendo = document.createElement("div")
  const hecho = document.createElement("div")
  return [ pendiente, haciendo, hecho ]
}

function taskSeccion() {
  const elements = taskSeccionElements()
  addBtn(elements[0]) 
  appendTaskSeccion(...elements)
}

function appendTaskSeccion(a,b,c){
  containerTask.appendChild(a)
  containerTask.appendChild(b)
  containerTask.appendChild(c)
}

function formForTask(){
  const inputTitle = document.createElement("input")
  const inputDescription = document.createElement("input")
  const inputCheck = document.createElement("input")
  const inputEndDate = document.createElement("input")

  document.querySelector(".pendiente").appendChild(inputTitle)
  document.querySelector(".pendiente").appendChild(inputDescription)
  document.querySelector(".pendiente").appendChild(inputCheck)
  document.querySelector(".pendiente").appendChild(inputEndDate)
}
// Crear cada tarjeta task

function createTask() {
  const element = taskElements()
  const task = createObjTask()
  setTaskContent(element, task)
  const card = appendTaskCard(element)
  containerTask.appendChild(card)
}
function setTaskContent(element, task){
  element.title.textContent = task.name
  element.descripcion.textContent = task.description
  element.check.textContent = task.check
  element.fechaLimite.textContent = task.endDate
}

function createObjTask(){
  const taskName = document.querySelector("#task-name")
  const taskDescription = document.querySelector("#task-description")
  const check = document.querySelector("#check")
  const endDate = document.querySelector("#end-date")
  const task = new Task(taskName, taskDescription, check, endDate)
  return task
}

function appendTaskCard(element){
  const taskCard = document.createElement("article")
  taskCard.appendChild(element.taskName)
  taskCard.appendChild(element.descripcion)
  taskCard.appendChild(element.check)
  taskCard.appendChild(element.fechaLimit)
  return taskCard
}

function taskElements() {
  const title = document.createElement("h3")
  const descripcion = document.createElement("p")
  const check = document.createElement("input")
  const fechaLimite = document.createElement("p")
  return { title, descripcion, check, fechaLimite }
}

// Añadir cada tajeta task

function addBtn(pendiente){
  const btn = document.createElement("button");
  btn.classList.add("add-task")
  btn.textContent = "+";
  pendiente.appendChild(btn);
  btn.addEventListener("click",formForTask)
}
