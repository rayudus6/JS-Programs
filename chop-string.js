function chopString(str, n) {
  let result = [];
  for (i = 0; i < str.length; i = i + n) {
    substr = str.slice(i, i + n);
    result.push(substr);
  }
  return result;
}

console.log(chopString("rayudus", 3));
