/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {

    return function (n: number): number {
        let l = 0, r = n;

        while (l < r) {
            let [midFloor, midCeil] = [Math.floor((l + r) / 2), Math.ceil((l + r) / 2)]

            if (!isBadVersion(midFloor) && isBadVersion(midCeil)) {
                return midCeil;
            }

            if (isBadVersion(midFloor)) {
                r = midFloor;
            } else {
                l = midFloor;
            }

        }

    };
};