import { formProject, projectContainer, titleContainer} from "./dom/selectors.js"
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
    projectList.add(createProject())
    insertProject(createProject(),projectList)
    titleContainer.textContent = createProject().title
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
    currentProject.add(createTask())
    insertTask(createTask(),projectList)
  });

});

function empityContentNecesary(){
  document.querySelector("#added-task").innerHTML = ""
  document.querySelector("#form_project-title").value = ""
  document.querySelector("#form_project-description").value = ""
}

function getFormTask() {
  const title = document.querySelector("#task-title").value
  const description = document.querySelector("#task-description").value
  const endDate = document.querySelector("#task-end-date").value
  return [ title, description, endDate ]
}
function createTask(){
  const [title, description, endDate] = getFormTask()
  const task = new Task(title,description,endDate)
  return task
}
function getFormProject(){
  const name = document.querySelector("#form_project-title").value
  const description = document.querySelector("#form_project-description").value
  return [ name, description ]
}
function createProject() {
  const [ name, description ] = getFormProject();
  const project = new Project(name, description);
  return project
}

// Esta fgit cheactory-functions ya esta haciendo demasiadas cosas

function insertTask(task,projectList) {
  const box = document.createElement("div")
  box.classList.add("task")
  const title =  document.createElement("p")
  const btnDelete = document.createElement("button")
  btnDelete.textContent = "delete"
  title.textContent = task.title
  box.appendChild(title)
  box.appendChild(btnDelete)

  btnDelete.addEventListener("click",()=>{
    box.remove()
    projectList.find(titleContainer.textContent).remove(title.textContent)
  })

   document.querySelector("#added-task").appendChild(box)
}

function insertProject(project, projectList) {
  const btn = document.createElement("button")
  const btnDelete = document.createElement("img")
  const btnEdit = document.createElement("img")
  const li = document.createElement("li")

  btn.classList.add("project")
  btnEdit.textContent = "Editar"
  btnDelete.textContent =  "delete"
  btn.textContent = project.title
  li.appendChild(btn)
  li.appendChild(btnEdit)
  li.appendChild(btnDelete)

  projectContainer.appendChild(li)
  btn.addEventListener("click",()=>{
    document.querySelector("#added-task").innerHTML = ""
    titleContainer.textContent = project.title
    const tasks = projectList.find(titleContainer.textContent).get();
    for (const task of tasks) {
      console.log(task)
      insertTask(task,projectList)
    }
  })
}



