/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (root == null) return [];
    var queue = [];
    var result = [];
    queue.push(root);
    while(queue.length != 0) {
      var size = queue.length;
      var subArray = [];
      for(let i = 0; i < size; i++) {
        var node = queue.shift();
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
        subArray.push(node.val);
      }
      result.push(subArray);
    }
    return result;
};

/**
  * Input: TreeNode root
  * Output: An nested array whose elements are arrays of each level nodes' values.
  * Constraints: N/A
  * Edge Cases: root is null, return empty array.
  * 
  * Solution:
  *   BFS: 
  *     Initiate a queue, put root in this queue;
  *     Initiate an empty array as result;
  *     Execute a loop, while queue is not empty:
  *       Get size of this queue at this time;
  *       Initiate an array;
  *       Execute a loop n times, n is the size we just get:
  *         Pop fisrt TreeNode and initiate a variable to store it;
  *         Store this TreeNode value in array;
  *         Push this TreeNode's children(if exist) into queue;
  *      After loop, push array into result array.
  * 
  * 
  * 
  *   
  */