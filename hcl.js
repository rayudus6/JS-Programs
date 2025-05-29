function splitIntoChunk(arr, chunk) {
  let result = [];
  for (i = 0; i < arr.length; i = i + chunk) {
    console.log(i);
    let tempArray = arr.slice(i, i + chunk);
    result.push(tempArray);
  }
  console.log(result);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const split = 4;
splitIntoChunk(array, split);

let arr = ["a", 1, 4, "test", 1221.334, ["a", "b", "c"], { a: "a", b: "b" }];

const result = arr.filter((ele) => {
  // console.log(typeof ele);
  // return typeof ele == "number";
  return Array.isArray(ele);
});

console.log(result); // [[ 'a', 'b', 'c' ]]

setTimeout(() => console.log("timeout"), 0); //6

const myPromise = Promise.resolve("resolved");

async function myAsync() {
  console.log("async started"); //2

  const result = await myPromise;

  console.log(result); //3

  console.log("async ended"); //4
}

console.log("before async"); //1

myAsync();

console.log("after async"); //5

const arrayNumbers = [1, 2, 3, 1, 1, 1, 3, 2, 4, 3, 1, 4, 3];

const counts = {};
arrayNumbers.forEach((item) => {
  counts[item] = (counts[item] || 0) + 1;
});
const sortedArray = [...new Set(arrayNumbers)].sort(
  (a, b) => counts[b] - counts[a]
);
console.log(sortedArray);
