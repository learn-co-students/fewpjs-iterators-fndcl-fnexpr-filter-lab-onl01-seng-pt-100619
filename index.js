//takes an array of drivers and a string
//returns the matching list of drivers
//this is case-insensitive

// let even = arr.filter(n => {
//   return n % 2 === 0;
// });

function findMatching(drivers, string){
    return drivers.filter(match => match.toLowerCase() === string.toLowerCase()
    )
}

// returns all drivers whose names begin with the provided letters.
function fuzzyMatch(drivers, string){
    return drivers.filter(match => match.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
}
// return: element whose name matches the provided string argument
function matchName(drivers, string){
    return drivers.filter(match => 
        match.name === string 
    )
}
