const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];

//利用Set
re1 = [...new Set(arr)]
//利用indexof
const IndexOf=function(arr){
    
    re = []
    for (let i=0;i<arr.length;i++){
        if(re.indexOf(arr[i])==-1)re.push(arr[i])
    }
 return re
}
//利用include

const Include = function(arr){
    re = []
    for(let i=0;i<arr.length;i++){
        if(!re.includes(arr[i]))re.push(arr[i])
    }
    return re
}

const Mapfilter=function(arr){
    re = []
    map = new Map()
   for(let i=0;i<arr.length;i++){
    if(!map.has(arr[i])){
        map.set(arr[i],true)
        re.push(arr[i])
    }

   }      
    return re   
   
}

const Filter=function(arr){

    return arr.filter((item,index)=>{
        return arr.indexOf(item)===index
    })
}



console.log(
    arr,'\n',
    re1,'\n',
    IndexOf(arr),'\n',
    Include(arr),'\n',
    Mapfilter(arr),'\n',
    Filter(arr))
