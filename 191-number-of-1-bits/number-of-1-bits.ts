function hammingWeight(n: number): number {
    // (n).toString(2) will convert the number to binary string (only +ve numbers)
    // Then we split the array and take the sum of it using .reduce function
    return (n).toString(2).split("").reduce((a, x) => Number(a) + Number(x), 0);
};