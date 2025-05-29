function countUpandDown(n) {
  let result = [];
  for (i = 0; i <= n; i++) {
    result.push(i);
  }
  for (i = n - 1; i >= 0; i--) {
    result.push(i);
  }
  return result;
}
console.log(countUpandDown(2));
