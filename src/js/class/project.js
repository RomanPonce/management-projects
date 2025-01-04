export default class Project {
  constructor(projectTitle,description){
    this.projectTitle = projectTitle;
    this.description = description;
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
