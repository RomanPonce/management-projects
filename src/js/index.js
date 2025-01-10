import { formProject } from "./dom/selectors.js";
import ProjectList from "./class/ProjectList.js";
import Project from "./class/project.js";
import createSeccion from "./functions/CreateSeccion.js";
import handleTask from "./functions/HandleTask.js";
import getForm from "./functions/manejador.js"

document.addEventListener("DOMContentLoaded", () => {

  let projectList = new ProjectList();

  createSeccion();

  formProject.addEventListener("submit", (e) => {
    e.preventDefault();

    const { name, description } = getForm();

    const project = new Project(name, description);
    
    projectList.add(project)

    handleTask(name);
  });
});
