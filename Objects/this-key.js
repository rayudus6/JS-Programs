const person={
    name:'rayudu',
    age:27,
    greet:function(){
        return this.name  +  ', Hi there'
    }
}

// ==>this keyword referce a current object here

console.log(person.name) //rayudu
console.log(person.age) //27
console.log(person.greet) //[Function: greet]

console.log(person.greet()) //Hi there