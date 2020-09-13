/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
   let node = head
   let bnode = null
   
 for(let i=0;node!==null;i++){
//按之前的要求赋值
    anode = node.next
    node.next = bnode
//切换node
    bnode = node
    node = anode
 }
 return  bnode
};      

let a = [1,2,3,4,5]

console.log(a[1].next)