export default class Project {
  constructor(title,description){
    this.title = title
    this.description = description
    this.taskList = []
  }
  get() {
    return this.taskList
  } 
  add(e) {
    this.taskList.push(e)
  }
  remove(title){
    const indice = this.taskList.findIndex((task)=>task.title === title)
    this.taskList.splice(indice, 1)
  }
}
