function decodeString(s: string): string {

    // Initializing a stack
    let stack = [];

    // Looping through the input string
    for (let i = 0; i < s.length; i++) {

        console.log("Stack", stack)

        // When we encounter a closing bracket,
        // the operations inside a bracket should be performed
        if (s[i] === "]") {

            // temp variable is created to store the string inside the bracker
            let temp = "";
            while (true) {
                let popped = stack.pop()

                // This break acts as a do while loop, which will run until the open bracket remains at the top
                if (popped === "[") {
                    break;
                }
                temp = popped + temp;
            }

            // This is the condition to handle, if the number is multiple digits
            let ct = "";
            while (true) {

                // Run until you encounter somthing that isn't a number
                if (Number.isNaN(Number(stack[stack.length - 1]))) {
                    break;
                }

                // Keep adding all the number to a string
                ct = stack.pop() + ct;
            }

            // After the open bracket is popped, next item will be the number of items it has to repeat
            let count = Number(ct)

            // Making the from the temp string and the number and pushing it back to the stack
            stack.push(Array(count).fill(temp).join(""))
        } else {

            // Simply push the value to the stack if it isn't "]"
            stack.push(s[i])
        }
    }

    // Simply join the stack at the end to get the result
    return stack.join("");
};