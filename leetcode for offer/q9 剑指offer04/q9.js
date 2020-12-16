

  /**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var findNumberIn2DArray = function(matrix, target) {
//     let list
//     list = matrix.flat(Infinity)
//     if(list.indexOf(target)!==-1){
//         return true
//     }else return false

// };

var findNumberIn2DArray = function(matrix,target){
 const r = matrix.length
 const l = (matrix[0]||[]).length

 for(let i=0,j=l-1;i<r&&j>=0;){
    
     if(target>matrix[i][j]){
         i++
     }else if(target<matrix[i][j]){
         j--
     }else return true
 }
 return false

}
list= 
[
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24]
    
  ]
  list1 = [[-5]]
console.log(findNumberIn2DArray(list1,-5))