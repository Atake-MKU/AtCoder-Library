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