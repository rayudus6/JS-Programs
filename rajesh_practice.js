// console.log(1<2<3); //true
// console.log(3<2<1); //false

// console.log(1+ 1-'1'+ 1);

// let i;

// for(i=0; i<=5; i++){
//     setTimeout(() =>{
//         console.log(i);
//     },1000)
// }

const countString = (str) =>{
    let result ={};
    for(let char of str){
        if(result[char]){
            result[char]++
        }else{
            result[char]=1;
        }
    }
    return result;
}

console.log(countString('abbcccdd'));

const reverse =(str) =>{
    const array=str.split(' ');
    let result=[];
    for(let char of array){
        const data=char.split('').reverse().join('');
        result.push(data);
    }
    return result.join('')
}

console.log(reverse('my name is rayudu'))