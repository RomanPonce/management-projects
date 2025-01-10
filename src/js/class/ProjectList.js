export default class ProjectList {
  constructor() {
    this.list = []; 
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



