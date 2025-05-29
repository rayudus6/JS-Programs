//for Each method
function countVowels(str){
    let result={a:0,e:0,i:0,o:0,u:0}
    str=str.toLowerCase();
    var word=str.split('');
    // console.log(word)
    word.forEach(function(ele){
        if(result.hasOwnProperty(ele)){
            result[ele]=result[ele] +1
        }
    })

    return result

}

console.log(countVowels('javascript'))
console.log(countVowels('bangalore'))

//es6 for of method

function vowels(str){
    let result={a:0,e:0,i:0,o:0,u:0}
    str=str.toLowerCase();
    for(const char of str){
        if(result.hasOwnProperty(char)){
            result[char]=result[char] +1
        }
    }
    return result
}

console.log(vowels('dwdsgwqhvbsq'))