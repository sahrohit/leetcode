function sortedSquares(nums: number[]): number[] {
    let neg = [], pos = []

    for (const num of nums) {
        if (num < 0) {
            neg.unshift(num * num)
        } else {
            pos.push(num * num)
        }
    }

    let final = [], n = 0, p = 0;

    while (Number.isFinite(neg[n]) && Number.isFinite(pos[p])) {
        if (neg[n] < pos[p]) {
            final.push(neg[n])
            n++;
        } else {
            final.push(pos[p])
            p++;
        }
    }

    if (Number.isFinite(neg[n])) {
        final.push(...(neg.slice(n)))
    } else if (Number.isFinite(pos[p])) {
        final.push(...(pos.slice(p)))
    }

    return final;
};