

//arr = new Array(1,3,3,4,5,67)

// var it = idmaker(['a', 'b']);

// //console.log(it)
// console.log(it.next(),it.next(),it.next())


// function idmaker(arr){
//     index = 0
//     return{
//         next:function(){
//             return index<arr.length?{value:arr[index++],done:false}:
//             {value:undefined,done:true}
//         }
//     }
// }


function a(){
    console.log('good night')
}
b = new a()
console.log(b.__proto__,JSON.stringify(a.__proto__))