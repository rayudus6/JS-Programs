function stringFromObject(obj) {
  let result = [];
  for (let key in obj) {
    str = `${key}-${obj[key]}`;
    result.push(str);
  }
  return result.join(",");
}

obj = { a: 1, b: 2 };

console.log(stringFromObject(obj));
