// const student={
//     name:'rayudu',
//     age:28
// }

// function greet(msg,age){
//     console.log(`${msg}, ${age} ${this.name}`)
// }

// // greet.call(student,'Hi','Mr');
// // greet.apply(student,['Hi','Mr'])

// newGreet=greet.bind(student);

// newGreet('Hello',"Mr")
// newGreet('Hello',"Mr")
// newGreet('Hello',"Mr")

let x = {},
  y = { name: "Ronny" };
// console.log(x[y]);
z = { name: "John" };
x[y] = { name: "Vivek" };
console.log(x[y]);
x[z] = { name: "Akki" };
console.log(x[y]);
