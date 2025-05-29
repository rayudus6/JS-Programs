

const person={
    name:'rayudu',
    job:'soft',
    age:28
}
const {name,job,age}=person

const data={...person}

console.log(data)

// data='10'

// console.log(age)
console.log([...data,person])


const array=['rayudu','rajesh','mounika']

const [,u2,]=array

console.log(u2)
