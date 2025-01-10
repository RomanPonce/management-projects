export default function TaskUI() {
  const card = document.createElement("div");

  function render(task) {
    
    const title = document.createElement("h3");
    const descripcion = document.createElement("p");
    const check = document.createElement("p");
    const fechaLimite = document.createElement("p");

    title.textContent = task.name;
    descripcion.textContent = task.description;
    check.textContent = task.check;
    fechaLimite.textContent = task.endDate;

    card.appendChild(title);
    card.appendChild(descripcion);
    card.appendChild(check);
    card.appendChild(fechaLimite);

    return card;
  }

  function changeColor(check) {
    card.style.background = "verde"
  }


  return { render };
}
