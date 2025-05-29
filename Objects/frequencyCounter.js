function frequencyCounter(str) {
  let result = {};
  str = str.toLowerCase();
  for (const char of str) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
    // console.log(result[char]);
  }
  return result;
}

console.log(frequencyCounter("hghghii"));
