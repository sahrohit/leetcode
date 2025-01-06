function pivotIndex(nums: number[]): number {

    // Getting the sum of all the elements in the array
    let total = nums.reduce((a, n) => a + n, 0)

    // Initializing the left sum to be 0, since the left pointer is at start
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        // Right sum will be total - (leftSum + currentNumber)
        let rightSum = total - leftSum - nums[i]

        // If left sum is same as right sum we can return the index
        if (leftSum === rightSum) {
            return i;
        }

        // Update the leftSum for next iteration
        leftSum += nums[i]
    }

    return -1;
};