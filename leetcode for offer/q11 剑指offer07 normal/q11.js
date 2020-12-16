/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

  
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }

var buildTree = function(preorder, inorder) {
    let node = new  TreeNode()
    if(preorder.length!==0){
        node.val = preorder[0]
        
        let mark 
        mark = inorder.indexOf(node.val)
        
        if(mark>0){
            node.left = buildTree(a=preorder.slice(1,mark+1),b=inorder.slice(0,mark)) 
        }else  node.left = null
        
        if(preorder.length-1-mark>0){
            node.right = buildTree(c=preorder.slice(mark+1,preorder.length),d=inorder.slice(mark+1,inorder.length)) 
        }else node.right= null
      
        return node
    } else return null
  
   
};

node = buildTree([3,9,20,15,7],[9,3,15,20,7])
console.log(node.val,node.left,node.right)
