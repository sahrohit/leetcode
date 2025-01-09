// This is quite hard to wrap you head around
// A better solution could be first, using a binary search to find a pivot
// Then using that pivot to fix the array
// Then using binary search to find the item  

function search(nums: number[], target: number): number {
    let l = 0, r = nums.length - 1

    // Loop until the left is greater than right
    while (l <= r) {

        // Getting the mid of the array
        let mid = Math.floor((l + r) / 2)

        // Return if mid is the target
        if (nums[mid] === target) {
            return mid;
        }

        // Left Sorted Portion
        if (nums[l] <= nums[mid]) {
            // If target is not on the left sorted position
            if (target > nums[mid] || target < nums[l]) {
                // Check on the right side of the array
                l = mid + 1
            } else {
                //Check on the left side of the array
                r = mid - 1
            }
            // Right Sorted Portion 
        } else {
            // If target is on the right portion of thr array
            if (target < nums[mid] || target > nums[r]) {
                // Check on the left side of the array
                r = mid - 1
            } else {
                // Check on the right side of the array
                l = mid + 1
            }
        }
    }
    // Returning -1 if not found
    return -1
};