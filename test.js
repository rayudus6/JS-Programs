// const arr = [10,2,11,5,3,7,4,1];

// const result=arr.map((ele)=>{
//     if(ele>5){
//         return ele *2
//     }else{
//         return ele
//     }
// })

// console.log(result)

//[20,2,22,5,3,14,4,1]

function add(x) {
  return function (y) {
    if (typeof y !== "undefined") {
      x = x + y;
      return arguments.callee;
    } else {
      return x;
    }
  };
}

console.log(add(1)(2)(3)()); //6
