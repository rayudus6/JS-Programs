

const prices=[10,20,40,50,100]

const result=prices.find(function(ele){
    return ele>30 //40
    // return ele > 250 //undefinded
})
console.log(result)


const numbers=[10,20,21,24,54,67,68]

const output=numbers.find(function(ele){
    return ele > 20 && ele %2==0;
})

console.log(output)