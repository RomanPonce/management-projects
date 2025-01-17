export default function addTaskBotton(){
    const btn = document.createElement("button");
    btn.id = "show-form-task"
    btn.textContent = "+";
    document.querySelector(".pendiente").appendChild(btn);
    formTask()
  }

function formTask(){
    const container = document.createElement("div")
    container.id= "task-form"
    container.classList.add("hide")
  
    const inputTitle = document.createElement("input")
    const inputDescription = document.createElement("input")
    const inputEndDate = document.createElement("input")
  
    const createTask = document.createElement("button")
    


    inputEndDate.type = "date"
  
    inputTitle.id = "task-title"
    inputDescription.id = "task-description"
    inputEndDate.id = "task-end-date"

    createTask.id = "create-task"
  
    createTask.textContent = "Create"
  
    container.appendChild(inputTitle)
    container.appendChild(inputDescription)
    container.appendChild(inputEndDate)
    container.appendChild(createTask)

    
    document.querySelector(".pendiente").appendChild(container)
  
  }
  
  