function maximumDifference(nums: number[]): number {
    let min = nums[0]
    let diff = -1;
    
    for (const num of nums) {
        min = Math.min(min, num);
        diff = Math.max(diff, num - min)
    }

    return diff ? diff : -1
};