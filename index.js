// Code your solution here
function findMatching(drivers, string) {
    let results = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
    return results
}

function fuzzyMatch(drivers, string) {
    let results = drivers.filter(driver => driver.startsWith(string))
    return results
}

function matchName(drivers, string) {
    let results = drivers.filter(driver => driver.name === string)
    return results
}