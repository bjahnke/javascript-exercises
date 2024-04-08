const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0) {
        return "OOPS"
    }
    if (num < 2) {
        return num;
    }
    let prevFib2 = 0;
    let prevFib1 = 1;
    let fib = prevFib1;
    for (let i = 2; i <= num; i++) {
        fib = prevFib1 + prevFib2;
        prevFib2 = prevFib1;
        prevFib1 = fib;
    }
    return fib;

};

// Do not edit below this line
module.exports = fibonacci;
