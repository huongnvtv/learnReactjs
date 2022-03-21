const headingElement = document.querySelector("#heading")
console.log(headingElement);

const addHeading = document.createElement("h1");
addHeading.innerText = "Add Heading";
addHeading.id = "heading 2"
addHeading.className = "demo"
addHeading.style.color = "red"
addHeading.style = "font-size : 12px";
// dùng object.assign
Object.assign(addHeading.style, {
    color : "red",
    backgroundColor : "#555",
    "font-size" : "12px"
})
document.body.appendChild(addHeading);