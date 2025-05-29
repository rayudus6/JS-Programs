function count(str) {
  let result = 0;
  str = JSON.stringify(str);
  for (i = 0; i < str.length; i++) {
    result += JSON.parse(str[i]);
  }
  return result;
}
console.log(count(1947));
