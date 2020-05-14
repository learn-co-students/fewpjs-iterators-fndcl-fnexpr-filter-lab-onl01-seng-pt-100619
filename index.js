// Code your solution here

let findMatching = (drivers, name) => {
    return drivers.filter(driver => {
        return driver.toLowerCase() === name.toLowerCase();
    });
};
  
let fuzzyMatch = (drivers, string) => {
    return drivers.filter(driver => {
    const d = driver.toLowerCase()
        return d.startsWith(string.toLowerCase())
    });
};
  
let matchName = (drivers, name) => {
    return drivers.filter(driver => {
        return driver.name.toLowerCase() === name.toLowerCase();
    });
};