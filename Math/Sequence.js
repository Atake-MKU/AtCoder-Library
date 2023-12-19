// 配列の順列並び替え（重複なし）
function Next_Permutation(array) {
    const result = [];
    function permutation(line) {
        if (array.length === line.length) {
            result.push(line);
        } else {
            for (const num of array) {
                if (!line.includes(num)) permutation([...line, num]);
            }
        }
    }
    permutation([])
    return result;
}

// 組み合わせ並び替え
function Next_Combination(n, r) {
    const result = [];
    const queue = [];
    for (let i = 0; i < n; i++) {
        queue.push([i]);
    }
    for (let i = 0; i < queue.length; i++) {
        const line = queue[i];
        if (line.length === r) {
            result.push(line);
        } else {
            for (let j = line[line.length - 1] + 1; j < n; j++) {
                queue.push([...line, j]);
            }
        }
    }
    return result;
}

// 順列（数字）
function Permutation(num) {
    const rslt = [];
    function Perm(line) {
        if (num - line.length) {
            for (let n = 0; n < num; n++) {
                if (line.includes(n)) continue;
                Perm([...line, n]);
            }
        } else rslt.push(line);
    }
    Perm([])
    return rslt;
}