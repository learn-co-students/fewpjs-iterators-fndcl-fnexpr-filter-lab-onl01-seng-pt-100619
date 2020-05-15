let findMatching = (drivers, name) => {
    return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
}

let fuzzyMatch = (drivers, letter) => {
    return drivers.filter(driver => driver.startsWith(letter))
}

let matchName = (drivers, name) => {
    return drivers.filter(driver => driver.name === name)
}