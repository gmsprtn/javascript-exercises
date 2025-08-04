const removeFromArray = function(arr) {
    for (let i = 1; i < arguments.length; i++) {
        const item = arguments[i];
        for (let j = arr.length - 1; j >= 0; j--) {
            if (arr[j] === item) {
                arr.splice(j, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
