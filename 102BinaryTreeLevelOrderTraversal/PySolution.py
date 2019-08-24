class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


from collections import deque
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
          return []
        result = []
        queue = deque([root])
        while queue:
          queueLen = len(queue)
          nodesValues = []
          
          for i in range(queueLen):
            node = queue.popleft()
            nodesValues.append(node.val)
            
            if(node.left):
              queue.append(node.left)
            if(node.right):
              queue.append(node.right)
          
          result.append(nodesValues)
        return result