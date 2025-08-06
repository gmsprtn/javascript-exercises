const fibonacci = function(index) {
    index = Number(index);
    if (index < 0) {
        return "OOPS";
    }
    const series = [0, 1];
    for (let i = 2; i <= index; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series[index];
};

// Do not edit below this line
module.exports = fibonacci;
