import { projectContainer, titleContainer } from "../dom/selectors.js";
import penSVG from "../assets/pen.svg";

function insertProject(project, projectList) {
  const btnProject = document.createElement("button");
  const li = document.createElement("li");
  const btnDelete = document.createElement("button");
  const btnEdit = document.createElement("button");

  btnEdit.innerHTML = `<svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="white" class="edit">
  //<path d="M426.666667,384 L426.666667,426.666667 L3.55271368e-14,426.666667 L3.55271368e-14,384 L426.666667,384 Z M277.333333,7.10542736e-15 L384,106.666667 L149.333333,341.333333 L42.6666667,341.333333 L42.6666667,234.666667 L277.333333,7.10542736e-15 Z M207.079667,130.583 L85.3333333,252.330667 L85.3333333,298.666667 L131.669333,298.666667 L253.415667,176.919 L207.079667,130.583 Z M277.333333,60.3306667 L237.249667,100.413 L283.585667,146.749 L323.669333,106.666667 L277.333333,60.3306667 Z"> </path></svg>`;
  btnDelete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24" fill="white" class="delete">
    <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
    </svg>`;

  btnProject.classList.add("project");

  btnProject.textContent = project.title;

  li.appendChild(btnProject);
  li.appendChild(btnDelete);
  li.appendChild(btnEdit);

  projectContainer.appendChild(li);
  btnProject.addEventListener("click", () => {
    document.querySelector("#added-task").innerHTML = "";
    titleContainer.textContent = project.title;
    const tasks = projectList.find(titleContainer.textContent).get();
    for (const task of tasks) {
      console.log(task);
      insertTask(task, projectList);
    }
  });
}
function insertTask(task, projectList) {
  const box = document.createElement("div");
  const title = document.createElement("p");
  const btnDelete = document.createElement("button");

  btnDelete.textContent = "delete";
  title.textContent = task.title;

  box.classList.add("task");
  box.appendChild(title);
  box.appendChild(btnDelete);

  btnDelete.addEventListener("click", () => {
    box.remove();
    projectList.find(titleContainer.textContent).remove(title.textContent);
  });

  document.querySelector("#added-task").appendChild(box);
}

export { insertProject, insertTask };
