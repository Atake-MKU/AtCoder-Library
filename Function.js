// lower_bound
function lower_bound(num, array) {
    let ok = array.length, ng = -1;
    while (ok - ng > 1) {
        const mid = (ok + ng) >> 1;
        if (array[mid] < num) {
            ng = mid;
        } else {
            ok = mid;
        }
    }
    return ok;
}

// 最長増加部分列（LIS）
function LIS(array) {
    let len = array.map(e => Infinity);
    for (const num of array) {
        len[lower_bound(num, len)] = num;
    }
    return len;
}

// bitが立っている個数を返す
function popcount(num) {
    let cnt = 0;
    while (num) {
        cnt += num & 1, num >>>= 1;
    }
    return cnt;
}

// ランレングス圧縮
function RLE(str) {
    const rslt = [];
    let cnt = 1, tmp = str[0];
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== tmp) {
            rslt.push([tmp, cnt]);
            tmp = str[i];
            cnt = 0;
        }
        cnt++;
    }
    rslt.push([tmp, cnt]);
    return rslt;
}

// 和がnumになるlen列の配列
function findSumSequences(len, num) {
    const rslt = [];
    const stack = [[]];
    while (stack.length) {
        const line = stack.pop();
        let sum = 0;
        for (const num of line) sum += num;
        if (line.length === len - 1) {
            line.push(num - sum);
            rslt.push(line);
            continue;
        }
        for (let i = 1; i < num - sum; i++) {
            stack.push([...line, i]);
        }
    }
    return rslt;
}

// グラフのサイクルを検出する関数
function detect_cycle(size, nexs) {
    function get_cycle() {
        let visited = new Array(size).fill(false);
        let parent = new Array(size).fill(false);
        const list = [];
        for (let i = 0; i < size; i++) {
            if (visited[i]) continue;
            const stack = [i];
            while (stack.length) {
                const now = stack.pop();
                visited[now] = true;
                parent[now] = i;
                const nex = nexs[now];
                if (visited[nex]) {
                    if (parent[nex] === i) list.push(nex);
                } else {
                    stack.push(nex);
                }
            }
        }
        return list;
    }
    const list = get_cycle();
    function identify_cycle(node) {
        const line = [node];
        while (nexs[node] !== line[0]) {
            node = nexs[node];
            line.push(node);
        }
        return line;
    }
    const arr = [];
    for (const num of list) arr.push(identify_cycle(num));
    return arr;
}
