function strWeight(str1,str2){
    const alphabets='abcdefghijklmnopqrstuvwxyz';
    let str1Weight=0, strWeight2=0, result;

    for(let i=0;i<str1.length;i++){
        str1Weight+=alphabets.indexOf(str1[i]) + 1;
    }
    for(let j=0; j<str2.length;j++){
        strWeight2+=alphabets.indexOf(str2[j]) + 1
    }
    if(str1Weight<strWeight2){
        result=1;
    }else if(strWeight2<str1Weight){
        result=2;
    }else{
        result='equal'
    }
    return result;

}
console.log(strWeight('rayudu','rama'))