// destructuring , rest

var array = ["javascript", "php", "java"];
// lấy các phần tử trong array --> đặt tên biến 
// lấy ra tất cả các phần tử
var [a, b, c] = array;
console.log(a, b, c)
// lấy ra phần tử đầu tiên và phần tử thứ 3
var [x, , y] = array;
console.log(x, y)

// toán tử rest (toán tử ba dấu chấm )
