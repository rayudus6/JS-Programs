// reverse a string
function reverse(str) {
  let words = str.split("").reverse().join("");
  return words;
}

console.log(reverse("rayudu"));

const cities = ["Bangalore", "Mumbai", "Nodia", "Chennai"];

// Adding a custom show method to the array prototype
Array.prototype.show = function () {
  return this.map((city) => `Happy New Year ${city}`);
};

console.log(cities.show());

let a = [1, 2, 3, 4];
let b = [6, 7, 8, 9];

let c = a.concat(b);
let d = [...a, ...b];
console.log(d);

let data = { name: "rayudu", city: "vdp" };
let { name: personName, city } = data;
console.log(personName);

function rayudu(...a) {
  // rest
  console.log(a); //[1,2,3,4]
}

rayudu(1, 2, 3, 4);

function factorial(n) {
  if (n >= 1) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  } else {
    return 0;
  }
}

console.log(factorial(5));

//smallest number
function smalletNumber(arrays) {
  return Math.min(...arrays.flat(Infinity));
}
console.log(
  smalletNumber([
    [3, 5, 7],
    [2, 8, [1, 4]],
    [6, 9],
  ])
);
