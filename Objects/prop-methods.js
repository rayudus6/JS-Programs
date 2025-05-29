const person={
    name:'rayudu',
    age:27,
    greet:function(){
        return 'Hi there'
    }
}

console.log(person.name) //rayudu
console.log(person.age) //27
console.log(person.greet) //[Function: greet]

console.log(person.greet()) //Hi there