Array.prototype.filter = function(callback,args){
    if(this==undefined)throw new TypeError('this is null or not defined')
    if(typeof callback !=='function') throw new TypeError(callback+' is not a function')
    //复杂变量可以修改
    const re = []
    len = this.length
    for(let i=0;i<len;i++){
        if(callback.call(args,this[i],i,this))re.push(this[i])
    }
    return re
}

//每个执行，有返回值
Array.prototype.map = function(callback,args){
    const re = []
    len = this.length
    for(let i=0;i<len;i++){
        re[i]=callback.call(args,this[i],i,this)
    }
    return re
}

//无返回值
Array.prototype.forEach = function(callback,args){
    re = []
    len = this.length
    for(let i=0;i<len;i++){
        callback.call(args,this[i],i,this)
    }
}

Array.prototype.reduce = function(callback,total){
    if(this==undefined)throw new TypeError('this is null or not defined')
    if(typeof callback !=='function') throw new TypeError(callback+'is not a function')
    const O = this
    const len = O.length
    let accumulator = total;
    let k =0 ;
    if(accumulator === undefined){
       if(len==0){
        throw new TypeError("Reduce of empty array with no inital value")
       }
       else 
        accumulator = O[k++];
    }
    for(;k<len;k++){

       accumulator=callback.call(undefined,accumulator ,O[k],k,O)
    }
    return accumulator

    
}
arr = [1,2,2,3,4,5,6,7,7,8,9,9,9,9,9]

re1 =arr.filter((item)=>(item>=2))
re2 = arr.map(item=>item+1)
// arr.forEach(item=>{item = item+2,console.log(item+'a')})
re4 = arr.reduce((acc,item)=>acc+item)
console.log(re1,'\n',
            re2,'\n',
           re4,'\n') 
