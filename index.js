// Code your solution here
function findMatching(arr, string) {
   let matches =  arr.filter(name => {
        return name.toLowerCase() === string.toLowerCase()
    })
    return !!matches ? matches : []
}

function fuzzyMatch(arr, string) {
    let matches =  arr.filter(name => {
        return name.charAt(0) === string.charAt(0)
    })
    return !!matches ? matches : []
}

function matchName(arr, string) {
    let matches = arr.filter(name => {
        return name.name === string
    })
    return !!matches ? matches : []
}