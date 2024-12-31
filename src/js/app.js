class Task {
  constructor(taskName, description, complete, endDate,  startDate = new Date()) {
    this.taskName = taskName;
    this.description = description;
    this.complete = complete;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

class Project {
  constructorp(projectTitle){
    this.projectTitle = projectTitle;
    this.list = []
  }
  get() {
    return this.list;
  } 
  add(e) {
    this.list.push(e)
  }
  remove(id){
    const indice = this.list.indexOf(id);
    this.list.splice(indice, 1);
  }

}

function render(e){
  console.log("Titulo " + e.taskName);
  console.log("Description " + e.description);
  console.log("Realizado " + e.complete);
  console.log("Fecha limite " + e.endDate);
}

const newTask = new Task("LALA","ALGO","NOP", "manñana")
console.log(newTask.taskName)
console.log(newTask.description)
console.log(newTask.complete)
console.log(newTask.startDate.getDate())
console.log(newTask.endDate)
