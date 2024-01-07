const findTheOldest = function(array) {
    const TODAY = new Date().getFullYear()
    let oldest = {}
    let oldestAge = 0
    

    array.forEach(element => {
        if (element.yearOfDeath === undefined){
            age = TODAY - element.yearOfBirth
        } else {
            age = element.yearOfDeath - element.yearOfBirth
        }
        
        if (age > oldestAge){
            oldest = element
            oldestAge = age
        }
    });

    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
