/**
 * @param {number} n
 * @return {number}
 */
/*
个人解析，这道题，第一反应是用递归，因为跨过1或2级台阶
就完全变成了新的子问题
*/
var climbStairs = function(n) {
    if(n==1)return 1
    else if(n==2) return 2
  else return (climbStairs(n-1)+climbStairs(n-2))

};

console.log(climbStairs(45))