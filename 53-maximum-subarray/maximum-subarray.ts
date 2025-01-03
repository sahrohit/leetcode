function maxSubArray(nums: number[]): number {
    // Maximum Sum of Subarray
    // Initialized to nums[0] because we can't initialize to 0 due to -ve numbers
    let maxSum = nums[0]

    // Current Sum of the subarray
    let curSum = 0;

    // Looping through numbers
    for (const num of nums) {

        // If the current sum upto a point is < 0, we remove that subarray from consideration
        if (curSum < 0) {
            curSum = 0;
        }

        // Updating the curSum at each iteration
        curSum += num

        // Updating the max sub, if curSum > maxSum
        maxSum = Math.max(maxSum, curSum)
    }
    return maxSum;
};