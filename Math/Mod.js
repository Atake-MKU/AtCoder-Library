const Mod = {
    mod: 998244353,
    // Number型の範囲内での掛け算
    mul: function(a, b) {
        const m = (...num) => num.reduce((a, b) => a * b % Mod.mod, 1);
        const x = 1e6;
        const a1 = Math.floor(a / x), a2 = a % x;
        const b1 = Math.floor(b / x), b2 = b % x;
        return (m(a1, b1, x, x) + m(a1 * b2 + b1 * a2, x) + m(a2, b2)) % Mod.mod;
    },
    // 累乗（繰り返し二乗法）
    pow: function(a, n) {
        if (n === 1) {
            return a;
        }
        if (n % 2 === 1) {
            return Mod.mul(a, Mod.pow(a, n - 1));
        } else {
            return Mod.pow(Mod.mul(a, a), n / 2);
        }
    },
    // 逆元
    inv: function(a) {
        return Mod.pow(a, Mod.mod - 2);
    },
    // 割算
    div: function(p, q) {
        return Mod.mul(p, Mod.inv(q));
    }
}
