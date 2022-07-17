const homeDiv = document.createElement("div");
homeDiv.classList.add("content");

const banner = document.createElement("div");
banner.classList.add("banner");
banner.textContent = "Welcome to Erik's diner";

homeDiv.appendChild(banner);

const review = document.createElement("div");
review.classList.add("review");
review.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptates minus odit asperiores, eum dolores ducimus rerum magni molestiae, sint amet necessitatibus ipsum est praesentium vero quaerat nisi. Nihil, dolores vitae deleniti labore nostrum officia consequatur quam! Nulla, nihil? Ipsum illo aliquid earum!"

const timeTable = document.createElement("div");
timeTable.classList.add("time-table");
const timeTableTitle = document.createElement("h3");
timeTableTitle.textContent = "Open Hours:";
const weekdays = document.createElement("p");
weekdays.textContent = "Weekdays: 6am - 8pm";
const saturdays = document.createElement("p");
saturdays.textContent = "Saturdays: 8m - 10pm";
const sundays = document.createElement("p");
sundays.textContent = "Sundays: 7am - 4pm";

timeTable.appendChild(timeTableTitle);
timeTable.appendChild(weekdays);
timeTable.appendChild(saturdays);
timeTable.appendChild(sundays);

homeDiv.appendChild(timeTable);

const location = document.createElement("div");
location.textContent = "Baker's Street 5";
location.classList.add("location");

homeDiv.appendChild(location);

export default homeDiv;