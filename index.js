function findMatching(drivers, name){
    let match = drivers.filter(possibleMatch => {
        return (possibleMatch.toLowerCase() === name.toLowerCase());
    })
    return match
}

function fuzzyMatch(drivers, name){
    let match = drivers.filter(possibleMatch => {
        return (possibleMatch.charAt(0) === name.charAt(0))
    })
    return match
}

function matchName(drivers, name){
    let match = drivers.filter(possibleMatch => {
        return(possibleMatch.name === name)
    })
    return match
}