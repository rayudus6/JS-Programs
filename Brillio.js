console.log(a);
var a = 10;

var x = 5;
function y() {
  console.log(x);
  var x = 8;
}
console.log(x);

for (var i = 0; i <= 5; i++) {
  setTimeout(() => console.log(i));
}
console.log("outside scope", i);

// const temp: Readonly = ["name", "age"];
// temp[0] = "place";
// console.log(temp);

console.log("A");
setTimeout(() => {
  console.log("B");
});
console.log("c");
const person1 = {
  sayName: () => {
    return this.name + " " + this.surname;
  },
};

const person2 = {
  name: "Jobs",
  surname: "Steve",
};

console.log(person1.sayName());

function add(a) {
  return function (b) {
    if (b !== undefined) {
      return add(a + b);
    } else {
      return a;
    }
  };
}

console.log(add(1)(4)(5)());

const result = async () => {
  console.log("A");
  await waitFor(3000);
  console.log("B");
};
result();

function waitFor(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
