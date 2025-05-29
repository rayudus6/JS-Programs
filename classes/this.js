const student={
    name:'rayudu',
    age:28,
    greet:function(){
        return `Hi, ${this.name}`
    }
}



// console.log(student.name)
// console.log(student.greet())

// console.log(this)//{}

// function rayudu(){
//     console.log(this)
// }

// rayudu()
const result=()=>{
    person={
        name:'rajesh'
    }
    return `${this.name}`
}

console.log(result())