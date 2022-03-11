// Toán tử spread : toán tử ... : bỏ đi dấu ngoặc trong array ,object
var array1 = ["Javascript", "Java"]
var array2 = ["PHP", "C++"];
var array3 = [...array1,...array2];
console.log(array3)

var object1 = {
    name : "javascript",
    price : 1000
}
var object2 = {
    name : "PHP",
    description : "Description"
}
var object3 = {
    ...object1,...object2
}
console.log(object3)

function logger(...params) {
    console.log(...params);
}
logger(1,2,3,4,5,6)
// rest định nghĩa tham số , spread dùng để giải nó ra