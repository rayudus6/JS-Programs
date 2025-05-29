const array = [
  {
    name: "Rayudu",
    age: 29,
  },
  {
    name: "geeta",
    age: 27,
  },
  {
    name: "a",
    age: 1,
  },
];
const num = [30, 24, 5, 6, 7, 8, 90, 67];

const res = num.sort((a, b) => a - b);
console.log(res);

const result = array.sort((a, b) => b.age - a.age);

// const result = array.sort((a, b) => (a.name - b.name ? 1 : -1));

console.log(result);

const a = [2, 3, 5, 7, 1, -7, -9, -56];

const rayudu = a.sort((a, b) => a - b);
console.log(rayudu);

function sliceArray(arr, n) {
  return arr.slice(n - 1).concat(arr.slice(0, n - 1));
}

console.log(sliceArray([2, 5, 6, 8, 9, 5, 6, 8], 2)); // Output: [9,5,6,8,2,5,6,8]

function shiftArray(arr, n) {
  var result = [];
  for (var i = n - 1; i < arr.length; i++) {
    result.push(arr[i]);
  }
  for (var j = 0; j < n - 1; j++) {
    result.push(arr[j]);
  }
  return result;
}

console.log(shiftArray([2, 5, 6, 8, 9, 5, 6, 8], 3)); // Output: [9,5,6,8,2,5,6,8]

function sort(arr) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        let tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr;
}

console.log(sort([10, 5, 89, 34, 69])); //[ 5, 10, 34, 69, 89 ]

function smallest(arr) {
  let small = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (small > arr[i]) {
      small = arr[i];
    }
  }
  return small;
}
console.log(smallest([2, 3, 5, 7, 1]));
