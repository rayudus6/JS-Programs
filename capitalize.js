function capitalize(str) {
  let result = [];
  words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    subStr = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    result.push(subStr);
  }
  return result.join(" ");
}

function mapCapitalize(str) {
  const data = str.split(" ");
  const result = data.map((word) => {
    const res = word[0].toUpperCase() + word.slice(1).toLowerCase();
    return res;
  });
  return result.join(" ");
}

function callFunction(str, fun) {
  console.log(fun(str));
}

callFunction("my name is rayudu", capitalize);
callFunction("hello world", mapCapitalize);
