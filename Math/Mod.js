const Mod = {
    mod: 998244353,
    // Number型の範囲内での掛け算
    mul: function(a, b) {
        const A = (a >> 16) * b % Mod.mod * 65536;
        const B = (a & 65535) * b;
        return (A + B) % Mod.mod;
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
    modinv: function(a) {
        return Mod.pow(a, Mod.mod - 2);
    },
    // 割算
    div: function(p, q) {
        return Mod.mul(p, Mod.modinv(q));
    }
}