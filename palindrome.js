function palindrome(str){
    let revStr='';
    let result=false;
    for(let i=str.length-1; i>=0; i--){
        revStr += str[i];
    }
    if(revStr===str){
        result=true;
    }
    return result;
}

console.log(palindrome('madam'));
console.log(palindrome('rayudu'));