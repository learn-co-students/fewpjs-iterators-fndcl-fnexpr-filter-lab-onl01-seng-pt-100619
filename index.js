// Code your solution here

function findMatching(drivers, string){
    let list = drivers.filter(driver => { return string.toLowerCase() === driver.toLowerCase()})
    return list; // filter can be summoned with the arrow notation
}

function fuzzyMatch(drivers, string){
    let list = drivers.filter(driver => { return string[0] === driver[0]})
    return list; // we assign the filter method to a variable to access the returned result as an array
}

function matchName(drivers, string){
    let list = drivers.filter(driver => { return string === driver.name})
    return list; // we can access an object inside the array by .attribute
}

