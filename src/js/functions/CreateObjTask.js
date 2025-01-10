import Task from "../class/task.js"

export default function createObjTask(){
  
  const taskName = document.querySelector("#task-name").value
  const taskDescription = document.querySelector("#task-description").value
  const endDate = document.querySelector("#end-date").value

  const task = new Task(taskName, taskDescription, endDate) 
  
  return task
}

