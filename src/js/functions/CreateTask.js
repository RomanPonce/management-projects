export default function createTask() {
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
  const task = new Task(taskName, taskDescription, check, endDate) // Necesito exportar este modulo
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