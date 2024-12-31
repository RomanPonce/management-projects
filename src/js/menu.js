import { content } from "./dom.js";

function itemMenu( category, name, price, description){
  return { category, name, price, description }
}

function menuItemsfn() {
  const costillar = itemMenu("carnes", "costillar", "200.00$", "rico, jugoso y sabroso");
  const pastel = itemMenu("tartas","pastel de papa", "100.00$", "suculento");
  const flan = itemMenu("postres","flan", "50.00$", "Crema o dulce de leche");

  const menuItems = [costillar, pastel, flan];
  
  return menuItems;
}

function createElements() {
  const menuConteiner  = document.createElement("div");
  
  menuItemsfn().forEach(e => {
    const itemContainer = document.createElement("article");
    
    const itemName = document.createElement("h2");
    const itemDescription = document.createElement("p");
    const itemPrice = document.createElement("p");

    itemName.textContent = e.name;
    itemDescription.textContent = e.description;
    itemPrice.textContent = e.price;

    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemDescription);
    itemContainer.appendChild(itemPrice);

    menuConteiner.appendChild(itemContainer);
  })

  return menuConteiner;
}

export function renderMenu(){
  content.innerHTML = "";

  return createElements();
}