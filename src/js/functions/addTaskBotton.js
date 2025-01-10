export default function addTaskBotton(){
    const btn = document.createElement("button");
    btn.id = "add-task"
    btn.textContent = "+";
    document.querySelector(".pendiente").appendChild(btn);
    btn.addEventListener("click",() => {
      formTask()
    })
  }

function formTask(){
    const container = document.createElement("div")
  
    const inputTitle = document.createElement("input")
    const inputDescription = document.createElement("input")
    const inputEndDate = document.createElement("input")
  
    const btnSubmit = document.createElement("button")
  
    inputTitle.id = "task-title"
    inputDescription.id = "task-description"
    inputEndDate.id = "task-end-date"

    btnSubmit.id = "btn-submit"
  
    btnSubmit.textContent = "CREATE TASK"
  
    container.appendChild(inputTitle)
    container.appendChild(inputDescription)
    container.appendChild(inputEndDate)
    container.appendChild(btnSubmit)
    
    document.querySelector(".pendiente").appendChild(container)
  
  }
  
  