const fibonacci = function(memberNumber) {
    arrayFibonacci = [1, 1]

    if (memberNumber == 0) {
        return 0
    } else if (memberNumber < 0) {
        return "OOPS"
    } else {
        for (let i = arrayFibonacci.length; i <= memberNumber; i++) {
            arrayFibonacci.push(arrayFibonacci[arrayFibonacci.length - 2] + arrayFibonacci[arrayFibonacci.length - 1])
        }
        return arrayFibonacci[memberNumber - 1]
    }
};

// Do not edit below this line
module.exports = fibonacci;
