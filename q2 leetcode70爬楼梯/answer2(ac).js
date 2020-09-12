/*
上个解法的问题在于:
重复计算的量过大，有很多子问题的结果没有保存，所有使运算量过大
*/

var climbStairs = function(n) {
   let array = []
   array =[0,1,2]
   for(let i=3;i<=n;i++){
    array[i]=array[i-1]+array[i-2]
   }
   

 return array[n]
};


console.log(climbStairs(2))
