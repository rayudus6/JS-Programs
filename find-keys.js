const obj = { d: 1, c: 2, t: 3 };

function findKeys(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push(key);
  }
  return arr;
}

console.log(findKeys(obj));

console.log(Object.keys(obj));
console.log(Object.values(obj));
