const sum = (a,b) =>( a +b);
console.log(sum(2,3))

const Course = function(name, price ) {
    this.name  = name;
    this.price = price;
}
const myCourse = new Course("javascript", 1000);
console.log(myCourse)


// enhanced object literals

var name = "javascript";
var price = 1000;

var course = {
    // định nghĩa key : value cho object
    name,
    price,
    // định nghĩa method cho object
    getName(){
        return this.name;
    }
}
console.log("course :" ,course)
console.log(course.getName())

// định nghĩa key dưới dạng biến 

var fieldName = 'name';
var fieldPrice = 'price';

var course2 = {
    [fieldName] : "javascript",
    [fieldPrice] : 1000
}
console.log("course 2 :" , course2)