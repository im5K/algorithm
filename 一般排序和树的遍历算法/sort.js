//冒泡排序
const bubble = function(arr){

    //return arr.sort((it1,it2)=>it1-it2)
    var len = arr.length
    for(let i=0;i<len;i++){
        let a
        for(let j=0;j<len-i;j++){
            if(arr[j]>arr[j+1]){
                a = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = a
            }

        }
       
    }
    return arr
}
const SelectionSort = function(arr){
    var len = arr.length
    for(let i=0;i<len;i++){
        let index = i
        for(let j=i;j<len;j++){
            if(arr[j]<arr[index]){
                index = j
            }
        }
        let temp = arr[index]
        arr[index] = arr[i] 
        arr[i] = temp

    }

    return arr
}


const InsertSort = function(arr){
    var len = arr.length
    for(let i=1;i<len;i++){
        for(let j=0;j<=i;j++){
            if(arr[i]<arr[j]){
                let temp = arr[i]
                arr.splice(i,1)
                arr.splice(j,0,temp)
            }
        }
        
    }
    return arr
}

const ShellSort  = function(arr){
    var len = arr.length
    for(let i=0,gap = Math.floor(len/2);gap>0;gap=Math.floor(gap/2)){
        for(let j=0;j<len;j++){
            let curr = arr[j]
            let k = j
            while(k-gap>=0&&curr<arr[k-gap]){
                arr[k] = arr[k-gap]
                arr[k-gap] = curr
                k = k - gap
            }
        }
    }
return arr
}

const QuickSort = function(arr){
    if(arr.length==0)return arr
    
    var left =[]
    var right = []
    
    for(let i =1;i<arr.length;i++){
        if(arr[i]<=arr[0])left.push(arr[i])
        if(arr[i]>arr[0])right.push(arr[i])
    }

    return QuickSort(left).concat([arr[0]],QuickSort(right))
}
//再看看这个排序算法
const MergeSort = function(arr){
    
    var len = arr.length
    if(len<2)return arr
    var middle = Math.floor(len/2)
    var left = arr.slice(0,middle)
    var right = arr.slice(middle,len)
    return merge(MergeSort(left),MergeSort(right))

    function merge(left,right){
        var re = []
        while(left.length>0&&right.length>0){
            if(left[0]>=right[0]){
                re.push(right.shift())
            }else{
                re.push(left.shift())
            }
        }
        while(left.length){
            re.push(left.shift())
        }
        while(right.length){
            re.push(right.shift())
        }
        
        return re
    }


}
const HeapSort  = function(arr){
    var len  = arr.length
    var re = []
    var index = 0
    //堆建立 
    while(index!=len-1){
        for(let i=len-index;i>0;i--){
            let fa = Math.floor(i/2)
            if(arr[i-1]>arr[fa-1]){
                swap(arr,i-1,fa-1)
            }   
        }
        swap(arr,0,len-1-index)
        index++

    }
    console.log(arr)
    return arr 
    function swap(arr,i,j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
 
    

     //堆重组
}


var arr = [1,3,6,7,3,2,1,2,3,4,9,-2,-9,0,298]
var newarr = QuickSort(arr)
var newArr = bubble(arr)
var newarr2 = MergeSort(arr)
var newarr3 = HeapSort(arr)
// console.log(newarr,'\n',
//             newArr,'\n',
//             newarr2)
