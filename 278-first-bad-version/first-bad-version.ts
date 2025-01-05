/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {

    return function (n: number): number {

        // [1......n] Since the list is already sorted, we can use binary search
        let l = 0, r = n;

        // Loop until the left pointer hasn't crossed right
        while (l < r) {

            // Checking the floor and ceil of the mid value on the divider line
            let [midFloor, midCeil] = [Math.floor((l + r) / 2), Math.ceil((l + r) / 2)]

            if (!isBadVersion(midFloor) && isBadVersion(midCeil)) {
                return midCeil;
            }

            // Shortening the search boundary by changing the left & right pointer
            if (isBadVersion(midFloor)) {
                r = midFloor;
            } else {
                l = midFloor;
            }

        }

    };
};