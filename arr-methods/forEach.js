/*
The forEach() method executes a provided function once for each element in array
*/



const products=['pen','book','cycle'];

products.forEach(function(ele,index,array){
    console.log(ele,index,array)
    console.log(`${ele} has ${ele.length} characters` )
})