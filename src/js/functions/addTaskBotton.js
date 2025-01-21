export default function addTaskBotton(){
    const btn = document.createElement("button");
    btn.id = "show-form-task"
    btn.textContent = "+";
    document.querySelector(".todo").appendChild(btn);
    formTask()
  }

function formTask(){
    const container = document.createElement("div")
    const inputTitle = document.createElement("input")
    const inputEndDate = document.createElement("input")
    const createTask = document.createElement("button")

    const labelTitle =  document.createElement("label")
    const labelEndDate =  document.createElement("label")

    labelTitle.textContent = "Titulo"
    labelEndDate.textContent = "Fecha de fin"

    inputEndDate.type = "date"

    container.id= "task-form"
    inputTitle.id = "task-title"
    inputEndDate.id = "task-end-date"
    createTask.id = "create-task"
  
    createTask.textContent = "Create"

    container.classList.add("hide")

    container.appendChild(labelTitle)
    container.appendChild(inputTitle)
    container.appendChild(labelEndDate)
    container.appendChild(inputEndDate)
    container.appendChild(createTask)

    document.querySelector(".todo").appendChild(container)
  }
  
  