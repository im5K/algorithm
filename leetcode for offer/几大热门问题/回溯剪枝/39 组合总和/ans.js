/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    //标准回溯法
    //去重是一大难题
    candidates = candidates.sort((item1,item2)=>item1-item2)
    var len = candidates.length
    var ans = []
    dfs(0,[],target)
    function dfs(l,[...use],target){
       
        for(let i =l;i<len;i++){
            let temp = [...use]
            if(target-candidates[i]>0){
               
                temp.push(candidates[i])
                dfs(i,temp,target-candidates[i])
                
                
            }else if(target==candidates[i]){
                
                temp.push(candidates[i])
                ans.push(temp)
                
            }else if(target<candidates[i])return
        }



    }
    return ans
};