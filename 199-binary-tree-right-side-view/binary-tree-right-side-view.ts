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

// This question is very similar to level order traversal, where we only return the last item of the level order

function rightSideView(root: TreeNode | null): number[] {

    // Initializing queue and result array
    let res = [], q = [root]

    // Run until queue has items
    while (q?.length) {

        // Reassign q.length to value, becuase q.length changes during the loop
        let last, qLen = q.length;

        for (let i = 0; i < qLen; i++) {
            // For each level, remove the node from the queue and add its children
            const node = q.shift()

            // If the dequeued items has value
            if (node) {
                // Update the last value
                last = node.val

                // Push its children to the queue
                q.push(node.left)
                q.push(node.right)

            }
        }

        // If last value exists, push it to the result list
        if (Number.isFinite(last)) {
            res.push(last)
        }
    }

    return res;
};