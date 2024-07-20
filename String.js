// 文字列の並び替え
function allPermutations(str) {
    const rslt = [];
    let arr = str.split("").sort();
    const n = arr.length;
    while (1) {
        rslt.push(arr.join(""));
        let i = n - 2;
        while (i >= 0 && arr[i] >= arr[i + 1]) i--;
        if (i < 0) break;
        let j = n - 1;
        while (arr[j] <= arr[i]) j--;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        let l = i + 1, r = n - 1;
        while (l < r) {
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++, r--;
        }
    }
    return rslt;
}

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
