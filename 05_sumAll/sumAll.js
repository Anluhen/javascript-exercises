const sumAll = function() {
    let sum = 0

    if (Math.min(...arguments) < 0) {
        return 'ERROR'
    }

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] != "number") {
            return 'ERROR'
        }
    }

    for (let i = Math.min(...arguments); i <= Math.max(...arguments); i++) {
        sum += i;
    }

    return sum
};

console.log(`Testing... ${sumAll(1, 4)}`)

// Do not edit below this line
module.exports = sumAll;
