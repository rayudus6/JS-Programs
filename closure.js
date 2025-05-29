const greet = (greeting) => {
  const sentance = (name) => {
    return `${greeting} ${name}`;
  };
  return sentance;
};

const greeter = greet("Hello");
console.log(greet("Hi")("rayudu"));
console.log(greeter("Nani"));
