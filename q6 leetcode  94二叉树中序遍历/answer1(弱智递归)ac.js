/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root,arr=[]) {
    let array=arr
    if(root!=null){
        array = inorderTraversal(root.left,array)
        array.push(root.val)
        array = inorderTraversal(root.right,array)
    }  
    return array 
};