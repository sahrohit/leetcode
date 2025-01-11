function reverse(x: number): number {
    let result = [], multiplier = 1;

    while (x !== 0) {
        if (x < 0) {
            multiplier = -1;
        }
        result.push(Math.abs(x % 10))
        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)
    }

    const res = Number(result.join("")) * multiplier

    if (res > (Math.pow(2, 31) - 1) || res < (Math.pow(2, 31) * -1)) {
        return 0;
    }

    return Number(result.join("")) * multiplier;
};