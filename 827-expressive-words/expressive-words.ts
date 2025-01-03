function expressiveWords(s: string, words: string[]): number {

    let result = 0;

    for (const word of words) {
        // Initialzing isStretchy to be false
        let isStretchy = true;

        // Initializing string index and word Index to be 0
        let si = 0, wi = 0;

        // Loop until the end of the word length
        while (wi < word.length) {

            // Initialize the string count and word count to 0
            let sc = 0, wc = 0;

            // Check if first character of string is same as the first character of word
            if (word[wi] !== s[si]) {
                isStretchy = false;
                break;
            }

            // Until they are the same character increament the word count
            while (word[wi] === s[si]) {
                wi++;
                wc++;
            }

            // Increament string count and index until last character in word is same as the last the current char in the string
            // Increament until s[si] is same as word[wi]
            while (s[si] === word[wi - 1]) {
                si++;
                sc++;
            }

            // Till this point, we know how many character are repeated.
            // Checking if the string counter is under 3 for a specific character then mark isSketchy as false;
            // sc !== wc helps us make sure that the same word is not passed as expressive words
            if (sc < 3 && sc !== wc) {
                isStretchy = false;
            }

            // If the string count is less than the word count, it can't be expressive as well
            if (sc < wc) {
                isStretchy = false;
            }
        }

        // if the isStretchy comes back true from the loop, add +1 to result for returning the value
        // the !s[si] is here to make sure that the entire string is processed
        if (isStretchy && !s[si]) result++;
    }

    return result;
};