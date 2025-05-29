console.log(this)//{}

function f1(){
    // console.log(this)// Object [global]
}
// f1()
const f2=function(){
    console.log(this)// Object [global]
}
f2()

const f3=() =>{
    console.log(this)//Out of the scope empty Object
}
f3()

const person={
    name:'rayudu',
    details:function(){
        return this.name //rayudu
    }
}

const person1={
    name:'rayudu',
    details:() =>{
        return this.name //undefined
    }
}

console.log(person.details())
console.log(person1.details())