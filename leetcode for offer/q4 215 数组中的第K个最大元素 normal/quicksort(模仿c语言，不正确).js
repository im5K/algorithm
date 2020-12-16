
/*
自己实现快排函数
目前有问题，还没发现怎么解决
应该从最原始的思路开始而不是模仿c语言
*/
qucicksort = function(array) {
    
    console.log(array.length,array)
    if(array.length==0)return []
    else if(array.length==1)return array[0]
    let left  = 0
    let  right = array.length - 1
    pivot = array[0]
    while(left!==right){
        for(;array[right]>pivot;right--);
        array[left] = array[right];
        for(;array[left]<pivot;left);
        array[right] = array[left]
       
    }
   
    array[left] = pivot
   let leftarr =  qucicksort(array.slice(0,left))
   
   
    for(let i=0;i<left-1;i++){
        array[i] =leftarr[i]
    }
    let rightarr =  qucicksort(array.slice(left+1))
    console.log(rightarr)
    debugger

    for(let i=array.length-1;i>left;i--){
        array[i] =rightarr[i]
    }

  return array
    
}
let a = [1,2,4,6,7,8,9]
console.log(qucicksort(a))
console.log(a.slice(1))
