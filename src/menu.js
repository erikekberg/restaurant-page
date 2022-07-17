const menuDiv = document.createElement("div");
menuDiv.classList.add("content");

const banner = document.createElement("div");
banner.classList.add("banner");
banner.textContent = "Menu";

class MenuItem {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

const menuItems = [
    new MenuItem("Mac n Cheese", "Cheesy macaroni", 3),
    new MenuItem("Burger", "tasty burger with cheese", 5),
    new MenuItem("Pancakes", "Fluffy pancakes with jam", 4),
    new MenuItem("Milkshake", "Chocolate, vanilla or raspberry milkshake", 2),
    new MenuItem("Ice cream", "Ice cream in every flavour you can imagine", 3),
]

const menuItemDiv = document.createElement("div");
menuItemDiv.classList.add("menu-container");

for(let item of menuItems) {
    const newItem = document.createElement("div");
    newItem.classList.add("menu-item");
    const name = document.createElement("p");
    name.textContent = item.name;
    newItem.appendChild(name);
    const description = document.createElement("p");
    description.textContent = item.description;
    newItem.appendChild(description);
    const price = document.createElement("p");
    price.textContent = `$${item.price}`;
    newItem.appendChild(price);
    menuItemDiv.appendChild(newItem);
}

menuDiv.appendChild(banner);
menuDiv.appendChild(menuItemDiv);

export default menuDiv;