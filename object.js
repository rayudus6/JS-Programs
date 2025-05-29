const person={
    'firstName':'rayudu',
    'lastName':'ps',
    'age':27
}

// //create method
// console.log(person)
// person.city='bangalore';

// console.log(person)

// //update method
// console.log(person)
// person.city='lucknow';
// console.log(person)

// //delete method
// console.log(person)
// delete person.city;

// console.log(person)

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);

//Object Inbuilt methods
//freeze method
// Object.freeze(person);
//seal method
// Object.seal(person);
// person.age=30;

// assign method
const item={id:24,'firstName':'geeta'};
console.log(item)

Object.assign(item,person)

console.log(item)

//entries method
console.log(Object.entries(person));
// console.log(person)


// console.log(person)

// values method--It returns an array
console.log(Object.values(person))
// keys method--It returns an array
console.log(Object.keys(person))


for(key in person){
    console.log(key,person[key])
}