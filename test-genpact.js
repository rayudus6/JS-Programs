const arr = "12ab3";

function divide() {
  let number = [];
  let str = [];
  const data = arr.split("");
  for (let i = 0; i < data.length; i++) {
    if (isNaN(data[i])) {
      str.push(data[i]);
    } else {
      number.push(data[i]);
    }
  }
  return [number, str];
}

console.log(divide());

const array2 = [0, 1, 2, [[[3, 4]]]]; //[0,1,2,3,4]

function arrayFunc(array2) {
  const flarArray = array2.flat(Infinity);
  return flarArray;
}
console.log(isNaN("yreuyur"));

console.log(arrayFunc(array2));

const array = [33, 19, 15, 6, 52, 1];

function smallNumber() {
  let result = array[0];
  for (i = 1; i < array.length; i++) {
    if (result > array[i]) {
      result = array[i];
    }
  }
  return result;
}

function smallArray(arr) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
        done = false;
      }
    }
  }
  return arr;
}

console.log(smallNumber(array));
console.log(smallArray(array));
