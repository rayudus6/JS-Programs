const numbers = [10, 13, 31, 40, 46];

const result = numbers.map(function (ele) {
  if (ele % 2 == 0) {
    return ele + 2;
  } else {
    return ele + 3;
  }
});

//   console.log(result)

const fruits = ["apple", "banana", "mango"];

const output = fruits.map(function (ele) {
  return {
    [ele]: ele.length,
  };
});

console.log(output);
console.log(fruits);
