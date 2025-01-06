function maxProfit(prices: number[]): number {
    // Two pointers to keep track to when to buy and when to sell
    let i = 0, j = 1, profit = 0;

    // Loop until the right pointer is at the end of the list
    while (j < prices.length) {

        // If there is a profit
        if (prices[j] > prices[i]) {

            // Update the profit
            profit = Math.max(profit, prices[j] - prices[i])

            // Move one step to the right looking for better proft
            j++;

            // If there isn't profit, we move the left pointer
        } else if (prices[i] >= prices[j]) {
            i++;

            // Since we cannot sell before buy, we move the right pointer as well
            if (i >= j) {
                j++;
            }
        }
    }

    return profit;
};