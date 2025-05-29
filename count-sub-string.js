function countSubString(str1,str2){
    let count=0;
    str1=str1.toLowerCase();
    words=str1.split(' ');
    for(let i=0; i<words.length;i++){
        if(words[i]===str2.toLowerCase()){
            count+=1;
        }
    }
    return count;
}
console.log(countSubString('The real name of my name is the surya','the'))