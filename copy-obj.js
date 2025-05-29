let a=[10];
let b=['ram']
// ==>this is same as shallow copy
// ==>Deep copy of array
// slice,concat,spread
// ==>Deep copy of object values
// assign,spread
console.log('a',a);//[10]
console.log('b',b);//['ram']

let c=a
console.log('a',a);//[10]
console.log('c',c);//[10]

a.push(20);
console.log('a',a);//[10,20]
console.log('c',c);//[10,20]

c.push(30)
console.log('a',a);//[ 10, 20, 30 ]
console.log('c',c);//[ 10, 20, 30 ]