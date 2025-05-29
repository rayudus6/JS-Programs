function evenOdd(arr){
    let evens=[];
    let odds=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            evens.push(arr[i]);
        }else{
            odds.push(arr[i])
        }
    }
    return [evens,odds]
}



console.log(evenOdd([1,2,3,4,5,6]))