// //为对象添加迭代方法
// //使之可以使用for of

// arr = [1,23]
// it = arr[Symbol.iterator]()
// //console.log(it.next(),it.next(),it.next())


// obj = {
//     name:'a',
//     age:12,
//     score:13,
// }

// function* test(obj){
//     let keys = Object.keys(obj)

//     for(let key of keys){
//         yield [key,obj[key]]
//     }

// }

// obj[Symbol.iterator] = test
// for(let [key,value] of obj){
//     console.log(key,value)
// }

itmaker = function(arr){
    index = 0
    return {
        next:function(){
            return index<arr.length?{value:arr[index++]+1,done:false}:
            {value:undefined,done:true}
        }
    }
}

let arr = [1,2,3,3,4,5,6]
// arr[Symbol.iterator]= function * (arr){
//     let i = 0;
   
    
//     return {
//         function(){
//             for(;i <arr.length;i++){
//                 yield (arr[i]+1)
//             }
//         }
//     }
  

        
        
    
//  }

// arr[Symbol.iterator]  = gen(arr)
// arr[Symbol.iterator]  = ()=> {
//     index = 0
//     return {
//         next:function(){
//             return index<arr.length?{value:arr[index++]+1,done:false}:
//             {value:undefined,done:true}
//             }
//         }
  
// }
for(let i of arr){
    console.log(i)
}
// console(arr.next())


