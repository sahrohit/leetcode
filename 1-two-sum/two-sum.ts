function twoSum(nums: number[], target: number): number[] {

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length; j++) {
    //         if (i !== j && nums[i] + nums[j] === target) {
    //             return [i, j]
    //         }
    //     }
    // }
    // return [0, 0]

    const targets = {}

    nums.forEach((x, i) => {
        targets[target - x] = i
    })

    for (let i = 0; i < nums.length; i++) {
        if (Number.isFinite(targets[nums[i]]) && targets[nums[i]] !== i) {
            return [targets[nums[i]], i]
        }
    }

};