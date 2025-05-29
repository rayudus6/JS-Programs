"use strict";
console.log(false == "0");
console.log(false === "0");
var x = 21;
var myFunction = function () {
  console.log(x);
  var x = 20;
};
myFunction();

// function count(str) {
//   let countObj = {};
//   for (let word of str) {
//     if (countObj[word]) {
//       countObj[word]++;
//     } else {
//       countObj[word] = 1;
//     }
//   }
//   return countObj;
// }

function count(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      result[str[i]]++;
    } else {
      result[str[i]] = 1;
    }
  }
  let output = "";
  for (let key in result) {
    output += `${key}${result[key]}`;
  }
  return output;
}

console.log(count("abcdaab"));
