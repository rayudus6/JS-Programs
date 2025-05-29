function lastIndex(str1,str2){
    let result=false;
    data=str1.split(' ');
    lastValue=data[data.length-1];
    // console.log(lastValue);
    if(lastValue===str2){
        result=true;
    }
    return result
}

console.log(lastIndex('My Name is Rayudu','Rayudu'))