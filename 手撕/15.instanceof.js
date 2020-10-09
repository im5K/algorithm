 Myinstanceof = (left,right)=>{
    
    if(left==null) return false
    
    if(typeof left!=='object'&&typeof left!=='function')return false
    let proto = Object.getPrototypeOf(left)

    while(true){
        if(proto==null)return false
        else if(proto==Object.getPrototypeOf(right))return true
        proto = Object.getPrototypeOf(proto)
    }
}



console.log(Myinstanceof(Function,Object))