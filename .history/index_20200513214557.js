// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, car) {
    return drivers.filter(match => 
        match.toLowerCase() === car.toLowerCase())
    // debugger 
}
