

//arr = new Array(1,3,3,4,5,67)

var it = idmaker(['a', 'b']);

//console.log(it)
console.log(it.next(),it.next(),it.next())


function idmaker(arr){
    index = 0
    return{
        next:function(){
            return index<arr.length?{value:arr[index++],done:false}:
            {value:undefined,done:true}
        }
    }
}
