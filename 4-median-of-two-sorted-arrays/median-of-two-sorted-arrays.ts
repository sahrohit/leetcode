function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let merged = [], i = 0, j = 0;

    // Going through both the array and creating a sorted merged array
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }

    // If one of the array is longer than the other, merge the remaining into the merged
    if (Number.isFinite(nums1[i])) {
        while (i < nums1.length) {
            merged.push(nums1[i])
            i++
        }
    } else {
        while (j < nums2.length) {
            merged.push(nums2[j])
            j++
        }
    }

    // Getting the median based on the length of the merged array
    if (merged.length % 2 === 0) {
        return ((merged[merged.length / 2] + merged[(merged.length / 2) - 1]) / 2)
    } else {
        return merged[Math.floor(merged.length / 2)]
    }
};