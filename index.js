// Code your solution here
let findMatching = (drivers, string) => {
    let matches = drivers.filter(d => d.toLowerCase() === string.toLowerCase())
    return matches
}

let fuzzyMatch = (drivers, string) => {
    let matches = drivers.filter(d => d.startsWith(string, 0))
    return matches
}

let matchName = (drivers, string) => {
    let matches = drivers.filter(d => d.name === string)
    return matches
}