const calculator={
    result:0,
    add:function(n=0){
        this.result=this.result + n;
        return this.result
    },
    minus:function(n=0){
        this.result=this.result - n;
        return this.result
    },
    multiply:function(n=1){
        this.result=this.result * n;
        return this.result
    },
    division:function(n=1){
        this.result=this.result / n;
        return this.result
    },
    reset:function(){
        this.result=0;
        return this.result
    }
}