const sumAll = function(numA, numB) {
    let sum = 0;
    if (typeof numA !== 'number' || typeof numB !== 'number') {
        return 'ERROR';
    }
    if (numA < 0 || numB < 0) {
        return 'ERROR';
    }
    let start = Math.min(numA, numB);
    let end = Math.max(numA, numB);
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
