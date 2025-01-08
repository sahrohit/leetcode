function merge(intervals: number[][]): number[][] {

    // Sorting the inputs based on their first number
    intervals.sort((a, b) => a[0] - b[0])

    let l = 0, r = 1;
    while (r < intervals.length) {

        // Checking if the last number in first array is greater than the first number in second array
        // [[a,b],[c,d]] ; if b >=d 
        if (intervals[l][1] >= intervals[r][0]) {

            //  If true, we create a new interval that includes both the intervals
            let newL = [intervals[l][0], Math.max(intervals[r][1], intervals[l][1])]

            // Remove those two intervals from the array
            intervals.splice(l, 2)

            // Add the new and updated interval
            intervals.splice(l, 0, newL)

        } else {

            // If the array is valid, increament the left pointer
            l++;

            // Increament the right pointer until, its right to the left pointer
            if (l >= r) {
                r++;
            }
        }
    }

    return intervals
};