let a=10;
let b=20;

console.log('a',a)//10
console.log('b',b)//20
let c=a;

console.log('a',a)//10
console.log('c',c)//10

a=300//==>the values will change after assigning
console.log('a',a)//300
console.log('c',c)//10

c=500 //==>the values will change after assigning
console.log('a',a)//300
console.log('c',c)//500 