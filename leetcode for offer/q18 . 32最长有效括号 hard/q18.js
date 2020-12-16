/**
 * @param {string} s
 * @return {number}
 */
//方法一，维护一个栈，并输出一个字符串，包含0,1
//方法work 时间复杂度不够
var longestValidParentheses = function(s) {
    //首先可以有判断是否括号能消去的算法 进栈，消括号
    //消去则置0，找到最长的0串
    //栈内记录符号的位置和形状
    var S = "()"
    var stack = []
    var mark  = new Array()//如果为0则说明消去了
    
    var len = s.length
    for(let i=0;i<len;i++)mark[i]=1
    for(let i=0;i<len;i++){//栈不为空则取出一个数并看是否匹配
        if(stack.length!=0){
            let p = stack.pop()
            if(s[i]==')'&&p[0]=='('){
                mark[i]=0
                mark[p[1]]=0
            }else{
                stack.push(p)
                stack.push([s[i],i])
            }
        }else{//栈为空直接push [s[i],i]
        stack.push([s[i],i])

        }
    }
    console.log(mark)
    let max = 0
maxzero = function(nums){
    var num = 0 //最多连续的0
    //双指针确定最长连续的0
    var len = nums.length
    var dp = new Array(len)
    for(let i=0;i<len;i++)dp[i] = new Array(len)
    for(let i=0;i<len;i++){
        if(nums[i]==0){
            dp[i][i]=1
        }else dp[i][i] = 0

    }

    for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            if(nums[j]==1)dp[i][j]=0
            if(nums[j]==0){
                
                dp[i][j] = dp[i][j-1]+1
                if(dp[i][j]>num){
                    console.log(num)
                    num = dp[i][j]
                    
                }
            }
        }
    }
    console.log(nums)
    return num
    




}   
 console.log("mark",mark,maxzero(mark))
  
    return maxzero(mark)

};
//方法二 维护动态规划dp
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    //动态规划
    //维护一个数组，以i结尾的最大子串长度
    //倒序遍历
    var len = s.length
    var dp = new Array(len)
    var max = 0
    for(let i=0;i<len;i++)dp[i]=0
    for(let i=0;i<len;i++){
        if(s[i]==")"&&s[i-1]=="("){
                dp[i]=(dp[i-2]||0)+2
                console.log(dp[i-2])
        }
        if(s[i]==')'&&s[i-1]==")"){
            if(s[i-1-dp[i-1]]=="("){
                 dp[i] = dp[i-1] + (dp[i-dp[i-1]-2]||0)+2
            }
           
        }
        if(dp[i]>max)max = dp[i]
    }
        console.log(dp)
        return max
};

// 方法三 left right记录左右括号个数， 
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    //记录左右括号个数
    var left = 0,right = 0,max=0
    var len = s.length
    for(let i=0;i<len;i++){
        if(s[i]=="("){
            left++
            }else if(s[i]==")"){
            right++  
            }
        if(right>left){
                pair = 0
                left = 0
                right = 0
            }else if(left==right){
                max = Math.max(max,2*left)
                console.log(max)
            }
    }
    left = 0,right = 0
        for(let i=len-1;i>=0;i--){
        if(s[i]=="("){
            left++
            }else if(s[i]==")"){
            right++
        }
        if(right<left){
                pair = 0
                left = 0
                right = 0
            }else if(left==right){
                max = Math.max(max,2*left)
            }
    }
    return max
};
