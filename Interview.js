function count(str) {
  let array = str.split("");
  const data = {};
  for (let value of array) {
    if (data[value]) {
      data[value]++;
    } else {
      data[value] = 1;
    }
  }
  console.log(data);
  let result = [];
  for (let key in data) {
    result.push(`${data[key]}${key}`);
  }
  return result.sort().join("");
}

console.log(count("aacbbcbbddaaccdd")); //4a4b4c4d

const a = [1, 2, 3, 4];
let b = a;
let d = JSON.parse(JSON.stringify(a));
let c = [...a];
let e = a.slice(0);
let f = [].concat(a);
b[0] = 8;
b[3] = 24;
// let c = [...a];
console.log(a); //[ 8, 2, 3, 24 ]
console.log(b); //[ 8, 2, 3, 24 ]
console.log(c); //[1,2,3,4]
console.log(d); //[1,2,3,4]
console.log(e); //[1,2,3,4]
