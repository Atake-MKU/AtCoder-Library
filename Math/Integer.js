// 最大公約数 Greatest Common Divisor
function GCD(...num) {
    const gcd = (a, b) => b > 0 ? gcd(b, a % b) : a;
    return num.reduce((a, b) => gcd(a, b), num[0]);
}

// 最小公倍数 Least Common Multiple
function LCM(...num) {
    const gcd = (a, b) => b > 0 ? gcd(b, a % b) : a;
    return num.reduce((a, b) => a * b / gcd(a, b));
}

// 約数全列挙
function factor(num) {
    const array = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i) continue;
        array.push(i);
        if (num / i !== i) {
            array.push(num / i);
        }
    }
    return array.sort((a, b) => a - b);
}
