let x = [1, 2, 3];
x.length = 0;

console.log(x);

x[0] = 4;
console.log(x);

function* generator() {
  yield 1;
}
const iterator = generator();
const value = iterator.next().value;
console.log(value);
