// 階乗 factorial
function fact(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * fact(num - 1);
    }
}

// BigInt型
function Big_fact(num) {
    if (num === 0n) {
        return 1n;
    } else {
        return num * Big_fact(num - 1n);
    } 
}

// 組み合わせ Combination
function nCr(n, r) {
    if (r === 1) {
        return n;
    } else {
        return n * nCr(n - 1, r - 1) / r;
    }
}

// 順列 Permutation
function nPr(n, r) {
    if (r === 1) {
        return n;
    } else {
        return n * nPr(n - 1, r - 1);
    }
}