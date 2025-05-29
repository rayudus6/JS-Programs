function checkObj(obj,str){
    let result=false;

    for(let key in obj){
        if(key===str){
            result=true;
        }
    }
    return result;
}
obj={
    'name':'rayudu',
    'age':27
}
console.log(checkObj(obj,'age'))