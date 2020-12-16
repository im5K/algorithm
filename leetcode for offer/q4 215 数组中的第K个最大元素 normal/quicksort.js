function quickSort(array){
    if(array.length<=1) return array
   
        const pivot = array[0]
        const leftarr = []
        const rightarr = []
       //一个bug浪费了一晚上，变量全部都要记得加const和let
        for(let i=1;i<array.length;i++){
            if(array[i]<pivot){
                leftarr.push(array[i])
            }
            else{
                rightarr.push(array[i])
            }
        }
        
       
        return quickSort(leftarr).concat(pivot).concat(quickSort(rightarr))

    //if(array.length<=1) return array
    
}

//let arr = [1,2,0,4,5,4,4,5,8,9,0]
//let arr = [ 4, 5, 4, 4]
//console.log(quickSort(arr))

let heap = [,11]
console.log(heap[0])