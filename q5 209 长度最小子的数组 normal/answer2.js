/*
抄袭
*/
var minSubArrayLen = function(s, nums) {
    let indexa=0,indexb=0;
    let sum = 0
    let ans = Number.MAX_SAFE_INTEGER
    for(;indexb<nums.length;indexb++){
        sum +=nums[indexb];
        while(sum>=s){
            ans = Math.min(ans,indexb-indexa+1)
            sum -=nums[indexa++]
            

        }

    }
  return ans==Number.MAX_SAFE_INTEGER?0:ans

  
};

array =[5,1,3,5,10,7,4,9,2,8]
console.log(minSubArrayLen(15,array),'good')