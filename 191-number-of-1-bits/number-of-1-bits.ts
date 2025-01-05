function hammingWeight(n: number): number {
    return (n).toString(2).split("").reduce((a, x) => Number(a) + Number(x), 0);
};