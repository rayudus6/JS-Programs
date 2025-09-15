function printNumbers(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      printNumbers(obj[key]);
    } else if (typeof obj[key] === "number") {
      console.log(obj[key]);
    }
  }
}
console.log(printNumbers({ a: 1, b: { c: 2, d: { e: 3 } } }));
