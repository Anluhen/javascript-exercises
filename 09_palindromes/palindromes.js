const palindromes = function (s) {
    s = s.replace(/\W/g, "")

    if (Array.from(s.toLowerCase()).toString() == Array.from(s.toLowerCase()).reverse().toString()) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
