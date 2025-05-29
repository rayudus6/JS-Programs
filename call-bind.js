const objData = {
  name: "rayudu",
  age: 28,
  booking: [],
};
const data2 = {
  name: "geeta",
  age: 26,
  booking: [],
};

function book(code, number) {
  // console.log(`${arg1} ${this.name}.Your ${this.age}..${arg2}`);
  this.booking.push({
    passanger: `${this.name}`,
    age: `${this.age}`,
    number,
    code,
  });
}

//call method
book.call(objData, 25, 112456);
book.call(data2, 24, 35464);

//apply method calling
const data = [30, 7847857];
book.apply(objData, data);
book.call(objData, ...data);
console.log(data2);

//bind method
const addVAT = (value, rate) => {
  console.log(value * rate);
};

const addTax = addVAT.bind(null);
const add = addVAT.bind(null, 20, 5);
add();
// console.log(addTax(24));
addTax(20, 10);
addTax(5, 10);

const flightData = {
  name: "rayudu",
  age: 28,
};
const birdsData = {
  name: "Tiger",
  age: 30,
};

function bindExample(code, state) {
  console.log(
    `Hi ${this.name},Your Booking flight ${code} is booked at ${this.age} in ${state}`
  );
}

const bindCall = bindExample.bind(flightData);
const birdsBind = bindExample.bind(birdsData);
const newBind = bindExample.bind(flightData);

bindCall(5678, "AP");
birdsBind(46565, "Tel");
newBind(5646, "AMB");
