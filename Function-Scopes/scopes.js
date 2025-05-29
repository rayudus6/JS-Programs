// let and const are block scopes

const str1='outside calling' //block scope

function greet(){ //function scope
    const str2='inside calling'
    console.log(str2);//inside calling
    console.log(str1)//outside calling
    if(true){ //block scope
       const str3='block scope'
        console.log(str3);//block scope
        console.log(str2)////inside calling
    }
    console.log(str3) //ReferenceError
}

greet();

console.log(str1)//outside calling
// console.log(str2)ReferenceError