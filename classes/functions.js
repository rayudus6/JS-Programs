//function declaration

console.log(functionName("nani"));

console.log(functionName("rayudu"));

//function expression
var name;
const result = function (person) {
  const data = { ...person };
  const number = "200";
  const message = `Hi all ${data}`;
  return message;
};

console.log(result());
