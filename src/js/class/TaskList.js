export default class TaskList {
  constructor(name){
    this.name = name
    this.list = []
  }
  get() {
    return this.list
  } 
  add(e) {
    this.list.push(e)
  }
  remove(id){
    const indice = this.list.indexOf(id)
    this.list.splice(indice, 1)
  }
}