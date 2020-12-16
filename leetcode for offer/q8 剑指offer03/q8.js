/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    let nus=[]

    for(val of nums){
        if(nus.indexOf(val)==-1){
            nus.push(val)

        }else{
            console.log(val)
        }
    }

};