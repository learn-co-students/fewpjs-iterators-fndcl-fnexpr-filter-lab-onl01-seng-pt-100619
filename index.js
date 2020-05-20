// Code your solution here
function findMatching(drivers, stringMatch){
    const match = drivers.filter(drive => {
        return drive.toLowerCase() === stringMatch.toLowerCase()
    })
    return match
}

function fuzzyMatch(drivers, letter){
    return drivers.filter(name => {
        return name.startsWith(letter) 
    })
}

function matchName(drivers, strings){
    return drivers.filter(key => {
        return key.name == strings
    })
}