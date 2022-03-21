var heading = document.createElement("h1");
heading.innerText = "Hello guys!"
heading.title = "Hello"
heading.className = "heading"
document.body.appendChild(heading)

// React
const h1React = React.createElement('h1', {
    title : "Hello",
    className : "heading"
}, "hello anh em");
console.log(h1React)

var ulElement = document.createElement('ul');
var liElement1 = document.createElement("li");
var liElement2 = document.createElement("li");
liElement1.innerText = "Javascript"
liElement2.innerText = "ReactJs"
ulElement
.appendChild(liElement1)
.appendChild(liElement2)
document.body.appendChild(ulElement)

// React

const ulReact = React.createElement('ul', null, 
React.createElement('li', null, "javascript"),
React.createElement('li', null, "ReactJs")
)

const rootElement = document.getElementById("root");
ReactDOM.render(ulReact,rootElement)