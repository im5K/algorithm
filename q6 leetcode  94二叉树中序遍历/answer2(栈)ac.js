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
res = [root]
ans = []
node = root
while(node||res.length){
    while(node){
    
        res.push(node)
        node = node.left
    }
    node = res.pop()
    ans.push(node.val)
    node = node.right
}


}