//convert a array of strings into object by using for loop

function buildobj(arr){
    let result={}
    for(let i=0;i<arr.length;i++){
        result[arr[i]]=arr[i].length
    }

    return result
}

console.log(buildobj(['apple','banana','mango']))

//convert a array of strings into object by using forEach method

function arrToobj(a){
    let result={};
    a.forEach(function(ele){
        result[ele]=ele.length
    })
    return result
}

console.log(arrToobj(['apple','banana','mango']))

