function romanToInt(s: string): number {
    const ROMAN = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let result = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        // If i-1 value is smaller than current value
        // We calculate both at once 
        if (ROMAN[s[i - 1]] < ROMAN[s[i]]) {
            result += (ROMAN[s[i]] - ROMAN[s[i - 1]])
            i--;
        } else {
            result += ROMAN[s[i]]
        }
    }

    return result;
};