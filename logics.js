// You are climbing a staircase. 
// It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


1-1
2-11,2
3-111,21,12
4-1111-211-121-112-22
function fn(n){
    if(n<=3){
        return n;
    }else{
        return (fn(n-1) + fn(n-2))
    }    
}

console.log(fn(5))//febonoky series