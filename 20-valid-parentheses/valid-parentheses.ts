function isValid(s: string): boolean {

    // Stack for keeping all the brackets
    let stack: string[] = []

    for (const character of s) {

        // Push the current character onto the stack
        stack.push(character)

        let top = stack[stack.length - 1]
        let second = stack[stack.length - 2]

        // If first and second items of the stack matches the bracket, we pop twice
        while ((top === ")" && second === "(") ||
            (top === "}" && second === "{") || (top === "]" && second === "[")) {
            stack.pop();
            stack.pop();

            // Updating the top and second after popping
            top = stack[stack.length - 1]
            second = stack[stack.length - 2]
        }

    }

    // The stack should be empty if the bracket is valid
    return stack.length === 0
}