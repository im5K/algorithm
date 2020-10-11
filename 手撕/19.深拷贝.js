//注意缺省的位置，缺省一定要放在后置位上

deepcopy = function(obj,target={}){
    let o = target

    for(k in obj){
        
       if(obj[k] instanceof Array){
           o[k] = deepcopy(obj[k],[])
       }else if(obj[k] instanceof Object){
           o[k] = deepcopy(obj[k])
       }else o[k] = obj[k]
    }
    return o
}
parent = {
    age:2,
    name:'adsad',
    string:[12,3,4,5,6,7],
    dad:{a:2,b:3}
}

good = deepcopy(parent)
parent.string.push(22222)


console.log(JSON.stringify(parent) ,JSON.stringify(good))