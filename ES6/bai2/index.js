// destructuring , rest

var array = ["javascript", "php", "java"];
// lấy các phần tử trong array --> đặt tên biến 
// lấy ra tất cả các phần tử
var [a, b, c] = array;
console.log(a, b, c)
// lấy ra phần tử đầu tiên và phần tử thứ 3
var [x, , y] = array;
console.log(x, y)

// toán tử rest (toán tử ba dấu chấm ) : lấy ra những thằng còn lại
var [a,...rest] = array;
console.log(a, rest)

// đối với object 
console.log("Object")
var course = {
    name : "javascript",
    price : 1000
}
// lấy đúng tên key của object mới được 
var {name, price} = course
console.log(name, price)

// dùng toán tử rest

var {name, ...objectPrice} = course;
console.log(name, objectPrice);

var course2 = {
    name : "javascript",
    price : 1000,
    children : {
        name : "java"
    },
    description : "hello"
}
var {name : parentName, children: {name}, description = "default"} = course2;
// nếu description không có thì sẽ lấy giá trị mặc định là default
console.log(parentName, name, description)


function logger(...params) {
    for(item of params) {
        console.log(item)
    }
}
logger(1,2,3,4,5)