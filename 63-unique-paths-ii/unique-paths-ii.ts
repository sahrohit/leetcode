function uniquePathsWithObstacles(obstacleGrid: number[][]): number {

    // Getting the grid area
    const M = obstacleGrid.length - 1, N = obstacleGrid[0].length - 1;

    // Creating a 2D DP array for memoization
    const dp = Array.from({ length: M + 1 }, () => Array(N + 1).fill(-1));

    const dfs = (x: number, y: number) => {

        // If going out of bound or hitting a obstacle
        if (x > M || y > N || obstacleGrid[x][y] === 1) {
            return 0;
        }

        // If reaching the goal we return 1, so we can take sum of all the routes that reaches the result
        if (x === M && y === N) {
            return 1;
        }

        // If the path is memoized, we can return value from the memoized array
        if (dp[x][y] !== -1) {
            return dp[x][y]
        }

        // If not memoized, calculate the value for the next positions, one right and one down
        dp[x][y] = dfs(x + 1, y) + dfs(x, y + 1)

        return dp[x][y]
    };

    // Starting at 0,0
    return dfs(0, 0)
}