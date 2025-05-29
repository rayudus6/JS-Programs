const person={
    firstName:'rayudu',
    lastName:'nani',
    age:27
}

// for in loop method
for(const key in person){
    console.log(key,person[key])
}

//object destructuring

const {firstName,lastName,age} =person;

console.log(firstName,lastName,age);