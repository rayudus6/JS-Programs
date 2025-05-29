const numbers = [4, 6, 3, 8];

const total = numbers.reduce((sum, value) => {
  return sum + value;
}, 9);

console.log(total);
