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
  find(title){
    return this.list.find((project)=>project.title === title)
  }
  remove(title){
    const index = this.list.findIndex((project)=>project.title === title)
    this.list.splice(index,1)
  }
}



