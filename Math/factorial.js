function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// BigInt型
function Big_factorial(num) {
    if (num === 0n) {
        return 1n;
    } else {
        return num * Big_factorial(num - 1n);
    } 
}