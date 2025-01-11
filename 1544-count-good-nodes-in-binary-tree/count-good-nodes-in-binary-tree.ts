/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function goodNodes(root: TreeNode | null): number {

    // Do a dfs, and check for all valid good paths
    const dfs = (node: TreeNode | null, maxVal: number) => {
        // if node is not found, return 0
        if (!node) {
            return 0;
        }

        // If this node is good, we get the res as 1 else as 0
        let res = (node.val >= maxVal) ? 1 : 0;

        // Update the max for this traversal
        maxVal = Math.max(maxVal, node.val)

        // Adding up the left traversal
        res += dfs(node.left, maxVal)

        // Adding up the right traversal
        res += dfs(node.right, maxVal)
        return res;
    }

    // Calling the DFS function
    return dfs(root, root.val)

};