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

function isValidBST(root: TreeNode | null): boolean {

    // Running a depth first search on the tree
    const dfs = (node: TreeNode | null, left: number, right: number) => {

        // If no node, return true (leaf node)
        if (node === null) {
            return true;
        }

        // If condition of binary tree doesn't match
        if (!((left < node.val) && (node.val < right))) {
            return false;
        }

        // Recursively check the left and right subtree
        return dfs(node.left, left, node.val) && dfs(node.right, node.val, right)
    }

    // Initialize root node with max left and right values
    return dfs(root, -Infinity, Infinity)

};