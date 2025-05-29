let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [4, 5, 6, 7, 8, 9];
let array3 = [];

for (let i = 0; i < array1.length; i++) {
  if (array3.indexOf(array1[i]) == -1) {
    array3.push(array1[i]);
  }
}
for (let i = 0; i < array2.length; i++) {
  if (array3.indexOf(array2[i]) == -1) {
    array3.push(array2[i]);
  }
}
// let array3=array1.concat(array2)

// function result(a){
// var data =a.filter((item,index,array) =>{
//     return (array.indexOf(item)==index)
// })
// return data
// }

//a=[1,2,3,4,5,6] b=[4,5,6,7,8,9]

console.log(array3.sort());
