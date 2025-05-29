let array1 = [10, 20, 30];
let array2 = array1;
let array3 = [...array1];
array1[0] = 50;
// array1.length = 0;
// array1[2] = 60;
console.log(array1); //[50,20,30]
console.log(array2); //[50,20,30]
console.log(array3); //[10,20,30]
