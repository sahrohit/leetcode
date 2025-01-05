function topKFrequent(nums: number[], k: number): number[] {

    // Getting the frequency of each number
    let freq = {}

    // Mapping and building the frequency record
    for (const num of nums) {
        if (freq[num]) {
            freq[num]++;
        } else {
            freq[num] = 1;
        }
    }

    // Converting the object into array of key and valuse
    return Object.entries(freq)
        // Sorting the array of [key, value] based on the value, frequency
        .sort((a, b) => Number(b[1]) - Number(a[1]))
        // Slicing the top K results
        .slice(0, k)
        // Converting the [key, value] array into a keys only array
        .map(x => Number(x[0]))
};