function flipObj(obj,str){
    let result={};

    for(const key in obj){
        if(key===str){
            result[obj[key]]=key
        } else{
            result[key]=obj[key]
        }
    }
    return result;
}

const developer={
    name:'rayudu',
    job:'developer'
}
console.log(flipObj(developer,'name'));