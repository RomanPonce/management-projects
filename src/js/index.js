import { formProject, titleContainer } from "./dom/selectors.js"
import { insertProject, insertTask } from "./functions/insert.js"

import ProjectList from "./class/ProjectList.js"
import Project from "./class/project.js"
import Task from "./class/task.js"
import createSeccion from "./functions/CreateSeccion.js"

import "./css/btnShowOrHide.css";
import "./css/style.css";

document.addEventListener("DOMContentLoaded", () => {
  
  let projectList = new ProjectList();

  createSeccion();

  formProject.addEventListener("submit", (e) => {
    e.preventDefault();
    const project = createProject()
    projectList.add(project)
    insertProject(project,projectList)
    titleContainer.textContent = project.title
    empityContentNecesary()
  });
  
  document.querySelector("#show-form-task").addEventListener("click", () => {
    const taskForm = document.querySelector("#task-form")
    const btnShow = document.querySelector("#show-form-task") 
    btnShow.textContent === "-" ?  btnShow.textContent = "+" : btnShow.textContent = "-"
    taskForm.classList.toggle("show")
    taskForm.classList.toggle("hide")
  });

  document.querySelector("#create-task").addEventListener("click", ()=>{
    const title = titleContainer.textContent
    const currentProject = projectList.find(title)
    // Si currentProject no es undefined, entonces crea la terae y la inserta
    if(currentProject){
      currentProject.add(createTask())
      insertTask(createTask(),projectList)
    } else{
      alert("No se pueden crear tareas si no exite ningun proyecto")
    }
  });

});

function empityContentNecesary(){
  document.querySelector("#added-task").innerHTML = ""
  document.querySelector("#form_project-title").value = ""
  document.querySelector("#form_project-description").value = ""
}

function getFormTask() {
  const title = document.querySelector("#task-title").value
  const endDate = document.querySelector("#task-end-date").value
  return [ title, endDate ]
}
function createTask(){
  const [title, endDate] = getFormTask()
  const objTask = new Task(title, endDate)
  return objTask
}
function getFormProject(){
  const name = document.querySelector("#form_project-title").value
  return [ name ]
}
function createProject() {
  const [ name, description ] = getFormProject();
  const project = new Project(name, description);
  return project
}
