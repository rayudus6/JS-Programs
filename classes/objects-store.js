let a=[10];
let b=['ram'];

console.log(a)
console.log(b)

c=a
a.push(20)
console.log(a);[10,20]
console.log(c)

c.push(30)
console.log(a);//[ 10, 20, 30 ]
console.log(c);//[ 10, 20, 30 ]