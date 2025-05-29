//receives a function as a argument to the function 
// or return a function as a output/value

const numbers=[10,20,30,40,70]
function myFind(arr,callback){//Higher order function
    for(let i=0;i<arr.length;i++){
        callback(arr[i])
    }
}

myFind(numbers,function(n){  //call back function
    console.log(n)
})