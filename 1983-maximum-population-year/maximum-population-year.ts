function maximumPopulation(logs: number[][]): number {
    let births = {};
    let deaths = {};

    // Taking frequency count of all births and deaths
    for (const log of logs) {
        if (births[log[0]]) {
            births[log[0]]++
        } else {
            births[log[0]] = 1
        }

        if (deaths[log[1]]) {
            deaths[log[1]]++
        } else {
            deaths[log[1]] = 1
        }
    }

    // Creating a timeline consisitng of all birth and deaths years for a sweepline plane
    const timeline = [...new Set(logs.flat().sort((a, b) => a - b))]

    // Keeping track of current population, max and max year
    let max = 0, maxYear = logs[0][0]
    let population = 0;

    // Sweeping Line with a year
    for (const year of timeline) {

        // If the current sweeping line has any year included in births
        if (Object.keys(births).includes(year.toString())) {
            population += births[year]
        }

        // If the current sweeping line has any year included in deaths
        if (Object.keys(deaths).includes(year.toString())) {
            population -= deaths[year];
        }

        // Updating the max and maxYear if max population is found 
        if (population > max) {
            max = population;

            // Also updating the year for max population
            maxYear = year;
        }
    }

    return maxYear;
};