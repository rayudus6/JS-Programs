const counter={
    count:0,
    up:function(){
        this.count=this.count +1;
        return this.count
    },
    down:function(){
        this.count=this.count -1;
        return this.count
    },
    reset:function(){
        this.count=0;
        return this.count
    }
}

console.log(counter.up())
console.log(counter.up())
console.log(counter.down())
console.log(counter.reset())