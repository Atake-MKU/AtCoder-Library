// 素因数分解
function PrimeFactorization(num) {
    const rslt = [];
    for (let n = 2; n <= Math.sqrt(num); n++) {
        while (num % n === 0) {
            rslt.push(n);
            num /= n;
        }
    }
    rslt.push(num);
    return rslt;
}

// 素因数全列挙
function primefactor(num) {
    const rslt = new Set();
    for (let n = 2; n <= Math.sqrt(num); n++) {
        while (num % n === 0) {
            rslt.add(n);
            num /= n;
        }
    }
    rslt.add(num);
    return [...rslt].sort((a, b) => a - b);
}

// 素数判定
function isPrime(num) {
    let rslt = true;
    for (let n = 2; n <= Math.sqrt(num); n++) {
        if (num % n === 0) {
            rslt = false;
        }
    }
    return rslt;
}

// 素数列挙（エラトステネスの篩）
function PrimeNumberList(num) {
    const rslt = [];
    let list = new Array(num + 1).fill(true);
    for (let i = 2; i <= num; i++) {
        if (list[i]) {
            rslt.push(i);
            for (let j = 2; i * j <= num; j++) {
                list[i * j] = false;
            }
        }
    }
    return rslt;
}