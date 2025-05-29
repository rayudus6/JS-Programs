// console.log(data)

// hoisting is a js mechanism where variables
// and functions declaration are moved to the
// top their scope before code executed

// var data='nani'
// var data

// console.log(data)

// arthemtic operations
// console.log(4+6)//10
// console.log(4-6)//-2
// console.log(4*6)//24
// console.log(4/6)//0.6666
// console.log(4%2)//0
// console.log(15%2)//1

console.log(1);
setTimeout(() => {
  console.log(3); //3-1
}, 1000);
setTimeout(() => {
  console.log(5); //5-0
}, 0);
console.log(2);
console.log(4);

[5 - 0, 3 - 1, 6 - 3];

// i++
// i--

// 10=='10'  true
// 10==='10'  false
// <=    true or false
// >=   true or false
// <    true or false
// >    true or false

// // &&    true or false
// // ||    true or false
// console.log(!true)   false

let words = ["r", "a", "y", "u", "d", "u"];

const [u1, u2, u3] = words;
console.log(words[0]);

// let array=[50,89,57,9,5]

// // console.log(words.sort())
// // console.log(array.sort((a,b) =>{return a-b}))

console.log(Array.isArray(words));
// console.log(Math.round(Math.random()*100))
