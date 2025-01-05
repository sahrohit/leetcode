function fib(n: number, memo: number[] = []): number {

    // Base case for when n=1 or less
    if (n < 2) {
        return n
    }

    // If the number is not memoized/cached
    if (!memo[n]) {

        // Memoizing each call for future reference
        // fib(5) = fib(4) + fib(3)
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    }
    
    return memo[n]
};