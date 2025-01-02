function isPalindrome(x: number): boolean {
    const str = String(x)
    for (let i = 0; i < Math.ceil(str.length / 2); i++) {
        console.log("Comparing", str[i], str[str.length - i - 1])
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true
};