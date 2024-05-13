// 特定の文字数を数える
function StrCount(string, target) {
    let rslt = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === target) rslt++;
    }
    return rslt;
}

// 回文判定
function isKaibun(string) {
    const l = string.length;
    let rslt = true;
    for (let i = 0; i < l / 2; i++) {
        if (string[i] !== string[l - 1 - i]) {
            rslt = false;
            break;
        }
    }
    return rslt;
}

class Hash {
    constructor(base, size) {
        this.mod = 1e14 + 31;
        this.hash = 0;
        this.base = base;
        this.size = size + 1;
    }
    add(str) {
        this.hash = (this.hash * this.size + this.base[str]) % this.mod;
        return this.hash;
    }
}
