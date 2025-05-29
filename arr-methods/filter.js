const numbers = [10, 20, 21, 24, 54, 67, 68];

const result = numbers.filter(function (ele) {
  return ele % 2 == 0;
});

const smallNumbers = numbers.filter((ele) => {
  return ele <= 20;
});
console.log(smallNumbers);
console.log(result);
console.log(numbers);
