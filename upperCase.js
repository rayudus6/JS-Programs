function upperCase(str){
    result='';
    for(i=0;i<str.length;i++){
    //     if(str[i]===str[i].toUpperCase()){
    //     result +=str[i].toLowerCase();
    // }else{
    //     result+=str[i].toUpperCase();
    // }
    str[i]===str[i].toUpperCase() ? result +=str[i].toLowerCase() : result+=str[i].toUpperCase();
    }
    return result;

}



console.log(upperCase('dCTDct'))