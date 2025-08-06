const palindromes = function (text) {
    const letters = text.toLowerCase().split("").filter((l) => (l >= "a" && l <= "z" || l >= "0" && l <= "9"));
    for (let i = 0; i < Math.floor(letters.length / 2); i++) {
        if (letters[i] !== letters[letters.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
