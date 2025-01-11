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

function levelOrder(root: TreeNode | null): number[][] {
    // Initializing the result and queue
    let res = [], q = [root]

    // If the queue has values
    while (q?.length) {

        // Empty the level after each loop
        let level = []

        // The q values updates, so keeping a qLen for a loop is required
        let qLen = q.length

        for (let i = 0; i < qLen; i++) {

            // Pop the item from the queue
            let node = q.shift()

            // It the pop item have value, append its children to the queue
            if (Number.isFinite(node?.val)) {
                // Pushing the current node value into the levels list
                level.push(node.val)

                // Pushing both left and right child to the queue
                q.push(node.left)
                q.push(node.right)
            }
        }

        // If the level has length, then push it to the res list
        if (level?.length) {
            res.push(level)
        }

    }

    return res;
};