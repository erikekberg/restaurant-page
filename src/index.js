import css from "./style.css";
import homeDiv from "./home";
import menuDiv from "./menu";
import contactDiv from "./contact";

const header = document.createElement("header");
header.textContent = "Erik's restaurant";
header.classList.add("header");
document.body.appendChild(header);

const buttons = document.createElement("div");
const homeButton = document.createElement("button");
homeButton.textContent = "HOME";
const menuButton = document.createElement("button");
menuButton.textContent = "MENU";
const contactButton = document.createElement("button");
contactButton.textContent = "CONTACT";

homeButton.addEventListener("click", () => {
    loadContent(homeDiv);
})

menuButton.addEventListener("click", () => {
    loadContent(menuDiv);
})

contactButton.addEventListener("click", () => {
    loadContent(contactDiv);
})

buttons.append(homeButton, menuButton, contactButton);
header.appendChild(buttons);

const contentContainer = document.createElement("div");
document.body.appendChild(contentContainer);

function loadContent(page) {
    contentContainer.innerHTML = "";
    contentContainer.appendChild(page);
}

loadContent(homeDiv);