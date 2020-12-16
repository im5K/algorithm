/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
/*
建立一个二维数组，其中存放了从i-j之前的和
实际上只用一半就好了
*/
var minSubArrayLen = function(s, nums) {
    let indexa=0,indexb=0;
    let plus = 0
    let len 
    for(let i=0;i<nums.length;i++){
        indexb = i
        plus = plus+nums[i]
        console.log(plus,'a1')
        if(plus>=s){
            if(len!==undefined){
                if(indexb-indexa<len) 
                len = indexb -indexa+1
             }else{
                 len =  indexb -indexa+1
             }
            //console.log(1)
            for(;plus>=s;){
                if(indexb-indexa<len)len = indexb -indexa+1
                plus = plus - nums[indexa]
                indexa =indexa+1 
            }   
        }
        console.log(plus,'a2')

       
       
    }
    return len?len:0
};


array =[5,1,3,5,10,7,4,9,2,8]
console.log(minSubArrayLen(15,array),'good')