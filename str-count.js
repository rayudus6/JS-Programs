function strchar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count += 1;
    }
  }
  return count;
}
console.log(strchar("hello", "o"));
console.log(strchar("hello", "l"));
