function max(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}

const array = [22, 45, 67, 78, 99];

console.log(max(array));
console.log(max([-22, -45, -67, -78, -99, 0]));

const arr = (...a) => {
  //rest
  console.log(a);
  //[1, 2, 3, 4, 5, 6];
};
arr(1, 2, 3, 4, 5, 6);

console.log(Math.max(...array));
