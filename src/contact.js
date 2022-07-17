const contactDiv = document.createElement("div");
contactDiv.classList.add("content");

const banner = document.createElement("div");
banner.classList.add("banner");
banner.textContent = "CONTACT";

const contactInfo = document.createElement("div");
contactInfo.classList.add("contact");
const myName = document.createElement("p");
myName.textContent = "Name: Erkan";
const adress = document.createElement("p");
adress.textContent = "Adress: Some Street 24";
const phonenumber = document.createElement("p");
phonenumber.textContent = "Phone Number: 123-456 789";

contactInfo.append(myName, adress, phonenumber);
contactDiv.appendChild(banner);
contactDiv.appendChild(contactInfo);

export default contactDiv;