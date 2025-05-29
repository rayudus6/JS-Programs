// const greet = (greeting) => {
//   return (sentance = (name) => {
//     return `${greeting} ${name}`;
//   });
// };

// const call = greet("Hello");

// console.log(call("Nani"));
// // console.log(greet("Hi")("Nani"));

// function testConst() {
//   const foo = { name: "Little Boy" };

//   foo.name = "Fat Man";

//   console.log(foo);
// }

// testConst();

// const emp = { name: "Rayudu", desg: "Develper" };

// const data = { ...emp };

// Object.assign();

const books = [
  { name: "B1", year: 2020 },

  { name: "B2", year: 2011 },

  { name: "B3", year: 2015 },

  { name: "B4", year: 2016 },

  { name: "B5", year: 2018 },

  { name: "B6", year: 2020 },
];
const res = books.find((value) => {
  return value.name == "B3";
});

console.log(res); //{ name: 'B3', year: 2015 } find

//[ { name: 'B3', year: 2015 } ] filter

useEffect(() => {
  console.log("user render");
}, [user]);
