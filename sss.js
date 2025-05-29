// const array = [6, 8, 2, 0, 1, 4, 6];

// const sort = array.sort((a, b) => a - b);

function sort(array) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        done = false;
        let temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

console.log(sort([6, 8, 2, 0, 1, 4, 6]));
