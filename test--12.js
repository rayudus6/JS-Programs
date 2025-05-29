function reverse(str){
    let words=str.split('').reverse().join('')
    return words
}



console.log(reverse('rayudu'))


function sort(arr){
    let result=arr.sort((a,b) =>{return a-b})
    return result
}

console.log(sort([30,56,9,67,5]))

function unique(arr){
    // let unique=arr.filter((value,index) =>{
    //     return arr.indexOf(value)===index 
    // })
    // return unique
    const result=[];
    for(i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i])==i){
            result.push(arr[i])
        }
    }
    return result
}


console.log(unique([10,20,10,40,20,60]))