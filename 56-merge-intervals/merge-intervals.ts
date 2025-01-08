function merge(intervals: number[][]): number[][] {

    // Sorting the inputs based on their first number
    intervals.sort((a, b) => a[0] - b[0])

    let l = 0, r = 1;
    while (r < intervals.length) {

        if (intervals[l][1] >= intervals[r][0]) {
            let newL = [intervals[l][0], Math.max(intervals[r][1], intervals[l][1])]

            intervals.splice(l, 2)

            intervals.splice(l, 0, newL)

        } else {
            l++;

            if (l >= r) {
                r++;
            }
        }
    }

    return intervals
};