// 階乗
const fact = num => num ? num *= fact(num - 1) : 1;

//　組み合わせの数
const Combination = (n, r) => r === 1 ? n : n * Combination(n - 1, r - 1) / r;

// 最大公約数を求める関数
function GCD(...nums) {
    const f = (a, b) => b ? f(b, a % b) : a;
    return nums.reduce((a, b) => f(a, b), nums[0]);
}

// 最小公倍数を求める関数
function LCM(...nums) {
    const f = (a, b) => b ? f(b, a % b) : a;
    return nums.reduce((a, b) => a * b / f(a, b), 1);
}

// 順列
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

// 優先度付きキュー
class PriorityQueue {
    constructor(arr = []) {
        this.Q = [];
        for (const v of arr) this.push(v);
    }
    push(d, pri) {
        const Q = this.Q; Q.push([d, pri]);
        for (let i = Q.length - 1, p; i > 0; i = p) {
            p = i - 1 >> 1;
            if (Q[p][1] < pri) break;
            Q[i] = [...Q[p]], Q[p] = [d, pri];
        }
    }
    pop() {
        const Q = this.Q, r = Q[0], [a, b] = Q.pop(), l = Q.length, f = n => 2 * n + 1;
        if (l) Q[0] = [a, b];
        for (let i = 0, t; f(i) < l; i = t) {
            t = f(i);
            if (t < l - 1 && Q[t][1] > Q[t + 1][1]) t++;
            if (Q[t][1] > Q[i][1]) break;
            [Q[t], Q[i]] = [[...Q[i]], [...Q[t]]];
        }
        return r;
    }
    length = () => this.Q.length;
    top = () => this.Q[0];
}
/* pri大=>優先度高
class PriorityQueue {
    constructor(arr = []) {
        this.Q = [];
        for (const v of arr) this.push(v);
    }
    push(d, pri) {
        const Q = this.Q; Q.push([d, pri]);
        for (let i = Q.length - 1, p; i > 0; i = p) {
            p = i - 1 >> 1;
            if (Q[p][1] > pri) break;
            Q[i] = [...Q[p]], Q[p] = [d, pri];
        }
    }
    pop() {
        const Q = this.Q, r = Q[0], [a, b] = Q.pop(), l = Q.length, f = n => 2 * n + 1;
        if (l) Q[0] = [a, b];
        for (let i = 0, t; f(i) < l; i = t) {
            t = f(i);
            if (t < l - 1 && Q[t][1] < Q[t + 1][1]) t++;
            if (Q[t][1] < Q[i][1]) break;
            [Q[t], Q[i]] = [[...Q[i]], [...Q[t]]];
        }
        return r;
    }
    length = () => this.Q.length;
    top = () => this.Q[0];
}
*/

/* 値のみ
class PriorityQueue {
    constructor(arr = []) {
        this.Q = [];
        for (const v of arr) this.push(v);
    }
    push(v) {
        const Q = this.Q; Q.push(v);
        for (let i = Q.length - 1, p; i > 0; i = p) {
            p = i - 1 >> 1;
            if (Q[p] < v) break;
            Q[i] = Q[p], Q[p] = v;
        }
    }
    pop() {
        const Q = this.Q, r = Q[0], a = Q.pop(), l = Q.length, f = n => 2 * n + 1;
        if (l) Q[0] = a;
        for (let i = 0, t; f(i) < l; i = t) {
            t = f(i);
            if (t < l - 1 && Q[t] > Q[t + 1]) t++;
            if (Q[t] > Q[i]) break;
            [Q[t], Q[i]] = [Q[i], Q[t]];
        }
        return r;
    }
    length = () => this.Q.length;
    top = () => this.Q[0];
} */

/* 値のみ pri大=>優先度高
class PriorityQueue {
    constructor(arr = []) {
        this.Q = [];
        for (const v of arr) this.push(v);
    }
    push(v) {
        const Q = this.Q; Q.push(v);
        for (let i = Q.length - 1, p; i > 0; i = p) {
            p = i - 1 >> 1;
            if (Q[p] > v) break;
            Q[i] = Q[p], Q[p] = v;
        }
    }
    pop() {
        const Q = this.Q, r = Q[0], a = Q.pop(), l = Q.length, f = n => 2 * n + 1;
        if (l) Q[0] = a;
        for (let i = 0, t; f(i) < l; i = t) {
            t = f(i);
            if (t < l - 1 && Q[t] < Q[t + 1]) t++;
            if (Q[t] < Q[i]) break;
            [Q[t], Q[i]] = [Q[i], Q[t]];
        }
        return r;
    }
    length = () => this.Q.length;
    top = () => this.Q[0];
}
*/

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

// 素因数分解
function PrimeFactorization(num) {
    const rslt = [];
    let n = 2;
    while (n <= Math.sqrt(num)) num % n ? n++ : (rslt.push(n), num /= n);
    rslt.push(num);
    return rslt;
}

// 素数判定
function isPrime(num) {
    let rslt = true;
    for (let n = 2; n <= Math.sqrt(num); n++) if (!(num % n)) rslt = false;
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

// 約数全列挙
function factor(num) {
    const array = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (!(num % i)) {
            array.push(i);
            if (num / i !== i) array.push(num / i);
        }
    }
    return array.sort((a, b) => a - b);
}

// 素因数全列挙
function primefactor(num) {
    const rslt = new Set();
    let n = 2;
    while (n <= Math.sqrt(num)) num % n ? n++ : (rslt.add(n), num /= n);
    rslt.add(num);
    return [...rslt].sort((a, b) => a - b);
}

// アルファベット
const alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

// Union-Find
class UnionFind {
    constructor(n) {
        this.tree = [];
        for (let i = 0; i < n; i++) this.tree.push(i);
    }
    unite(a, b) {
        const A = this.find(a), B = this.find(b);
        A < B ? this.tree[B] = A : this.tree[A] = B;
    }
    issame(a, b) {
        return this.find(a) === this.find(b);
    }
    find(num) {
        return num - this.tree[num] ? this.tree[num] = this.find(this.tree[num]) : num;
    }
    update() {
        this.tree = this.tree.map(e => this.find(e));
    }
}

// 二分探索木
class BST_Node {
    constructor(value = 0) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = new BST_Node(-1);
    }
    Insert(v) {
        const node_v = new BST_Node(v);
        let next = this.root;
        let par;
        while (next) {
            par = next;
            next = v <= par.value ? par.left : par.right;
        }
        node_v.parent = par;
        v <= par.value ? par.left = node_v : par.right = node_v;
    }
    Find(v) {
        let node = this.root;
        while (node) {
            if (node.value === v) break;
            node = v < node.value ? node.left : node.right;
        }
        return node;
    }
    _min_node(node_v) {
        return node_v.left ? this._min_node(node_v.left) : node_v;
    }
    Delete(value) {
        let node = this.Find(value);
        if (node) {
            if (node.left && node.right) {
                let next = this._min_node(node.right).value;
                this.Delete(next);
                node.value = next;
            } else {
                let par = node.parent;
                let ch = node.left || node.right;
                if (ch) ch.parent = par;
                if (par.left === node) par.left = ch;
                if (par.right === node) par.right = ch;
            }
            return true;
        } else return false;
    }
}

// Binary Indexed Tree (Fenwick Tree)
class FenwickTree {
    constructor(arr) {
        const l = arr.length; this.tree = new Array(l + 1).fill(0);
        for (let i = 0; i < l; i++) this.update(i, arr[i]);
    }
    update(i, v) { i++; while (i < this.tree.length) this.tree[i] += v, i += i & -i }
    sum(i) { let t = 0; while (i > 0) t += this.tree[i], i -= i & -i; return t }
}

// Number型の範囲でmodの掛け算
const mod = 998244353;
const mul = (a, b) => ((a >> 16) * b % mod * 65536 + (a & 65535) * b) % mod;

// 累乗（繰り返し二乗法）
const pow = (a, n) => n - 1 ? (n % 2 ? mul(a, pow(a, n - 1)) : pow(mul(a, a), n / 2)) : a;

// 逆元
const modinv = a => pow(a, mod - 2);

// 割り算
const div = (p, q) => mul(p, modinv(q));

// 二分探索
function BinarySearch(target, array) {
    const ok = -1, ng = array.length;
    while (ng - ok > 1) {
        const mid = (ok + ng) >> 1;
        array[mid] > target ? ng = mid : ok = mid;
    }
    return ok;
}

// 特定の文字数を数える
function StrCount(string, target) {
    let rslt = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === target) rslt++;
    }
    return rslt;
}

// 数字の分配
function distribute(space, num) {
    const result = [];
    const queue = [[new Array(space).fill(0), num - space, 0]];
    let index = 0;
    while (index < queue.length) {
        const [arr, n, i] = queue[index];
        result.push(arr);
        index++;
        if (!n) continue;
        for (let j = i; j < space; j++) {
            let line = [...arr];
            line[j]++;
            queue.push([line, n - 1, j]);
        }
    }
    return result;
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
        for (let i = 1; i < num - sum; i++) stack.push([...line, i]);
    }
    return rslt;
}

// 配列の和
const sum = array => array.reduce((a, b) => a + b, 0);

// 桁和
const sumdigit = num => num.toString().split("").map(Number).reduce((a, b) => a + b, 0);

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

// 無向グラフの辺を作成
function Edges(N, M, uv) {
    const edges = [];
    for (let i = 1; i <= N; i++) edges[i] = [];
    for (let i = 0; i < M; i++) {
        const [n, m] = uv[i];
        edges[n].push(m), edges[m].push(n);
    }
    return edges.map(e => e.sort((a, b) => a - b));
}

//　配列の最後の要素を返す
const last = arr => arr[arr.length - 1];

// 四方位ベクトル
const dir4 = [[-1, 0], [1, 0], [0, -1], [0, 1]];

// 八方位ベクトル
const dir8 = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

// 壁に囲まれたグリッドの作成
function makegrid(h, w, map) {
    const grid = [new Array(w + 2).fill(true)];
    for (let i = 1; i <= h; i++) {
        grid[i] = [true];
        for (let j = 0; j < w; j++) grid[i].push(map[i - 1][j] === `#`);
        grid[i].push(true);
    }
    grid.push(new Array(w + 2).fill(true));
    return grid;
}

// ダイクストラ法
function dijkstra(n, m, abc) {
    class PriorityQueue {
        constructor() { this.Q = [] };
        push(d, pri) {
            const Q = this.Q;
            Q.push([d, pri]);
            const f = n => Math.floor((n - 1) / 2);
            for (let i = Q.length - 1, p; i > 0; i = p) {
                p = f(i);
                if (Q[p][1] < pri) break;
                Q[i] = [...Q[p]], Q[p] = [d, pri];
            }
        }
        pop() {
            const Q = this.Q;
            const r = Q[0];
            const [a, b] = Q.pop();
            const l = Q.length;
            if (l) Q[0] = [a, b];
            const f = n => 2 * n + 1;
            for (let i = 0, t; f(i) < l; i = t) {
                t = f(i);
                if (t < l - 1 && Q[t][1] > Q[t + 1][1]) t++;
                if (Q[t][1] > Q[i][1]) break;
                [Q[t], Q[i]] = [[...Q[i]], [...Q[t]]];
            }
            return r;
        }
        length = () => this.Q.length;
        top = () => this.Q[0];
    }
    const start = 0;
    const path = {};
    for (let i = 0; i < m; i++) {
        const [a, b, c] = abc[i];
        if (!(a in path)) path[a] = {};
        path[a][b] = c;
        if (!(b in path)) path[b] = {};
        path[b][a] = c;
    }
    let distance = new Array(n).fill(Infinity);
    distance[start] = 0;
    let visited = new Array(n).fill(false);
    const pq = new PriorityQueue();
    pq.push(start, distance[start]);
    while (pq.length()) {
        const [city, d] = pq.pop();
        if (visited[city]) continue;
        visited[city] = true;
        const root = path[city];
        for (const key in root) {
            const next = +key;
            const next_distance = d + root[key];
            if (!visited[next] && distance[next] > next_distance) {
                distance[next] = next_distance;
                pq.push(next, next_distance);
            }
        }
    }
    return distance;
}

// 全探索（n^r）
function PowerSearch(n, r) {
    const result = [];
    const queue = [[]];
    for (let i = 0; i < queue.length; i++) {
        const line = queue[i];
        if (line.length === r) {
            result.push(line);
        } else {
            for (let j = 0; j < n; j++) {
                queue.push([...line, j]);
            }
        }
    }
    return result;
}

// 全探索（nPr）
function PermutationSearch(n, r) {
    const result = [];
    const queue = [[]];
    for (let i = 0; i < queue.length; i++) {
        const line = queue[i];
        if (line.length === r) {
            result.push(line);
        } else {
            for (let j = 0; j < n; j++) {
                if (line.includes(j)) continue;
                queue.push([...line, j]);
            }
        }
    }
    return result;
}

// 全探索（nCr）
function CombinationSearch(n, r) {
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

// グリッド全探索
function GridSearch(h, w) {
    const result = [];
    for (let num = 0; num < h * w; num++) {
        const j = num % w;
        const i = (num - j) / w;
        result.push([i, j]);
    }
    return result;
}

// 多重集合
class MultiSet {
    constructor() {
        this.map = new Map();
        this.zero = 0;
        this.cnt = 0;
    }
    add(num) {
        const map = this.map;
        let n = 0;
        if (map.has(num)) {
            n += map.get(num);
            if (!n) this.zero--;
        }
        map.set(num, n + 1);
        this.cnt++;
    }
    delete(num) {
        const map = this.map;
        let n = map.get(num);
        if (n === 1) this.zero++;
        map.set(num, n - 1);
        this.cnt--;
    }
    has = num => this.map.has(num) && this.map.get(num);
    size = () => this.map.size - this.zero;
    clear = () => this.map.clear();
    clone() {
        const newMultiSet = new MultiSet();
        this.map.forEach((value, key) => newMultiSet.map.set(key, value));
        return newMultiSet;
    }
    max() {
        let max = 0;
        for (const value of this.map.values()) if (max < value) max = value;
        return max;
    }
}

// lower_bound
function lower_bound(num, array) {
    let ok = array.length, ng = -1;
    while (ok - ng > 1) {
        const mid = (ok + ng) >> 1;
        array[mid] < num ? ng = mid : ok = mid;
    }
    return ok;
}

// 最長増加部分列（LIS）
function LIS(array) {
    let len = array.map(e => Infinity);
    for (const num of array) len[lower_bound(num, len)] = num;
    return len;
}

// bitが立っている個数を返す
function popcount(num) {
    let cnt = 0;
    while (num) cnt += num & 1, num >>>= 1;
    return cnt;
}

// 配列の中央値
function Median(array) {
    const n = array.length, arr = array.sort((a, b) => a - b);
    return n % 2 ? arr[n >> 1] : (arr[n / 2] + arr[n / 2 - 1]) / 2;
}

// マンハッタン距離
const mdist = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);

// 距離
const dist = (a, b) => Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);

// 2次元行列の複製
function copymatrix(matrix) {
    const rslt = [];
    for (const line of matrix) rslt.push([...line]);
    return rslt;
}

// ランレングス圧縮
function RLE(str) {
    const rslt = [];
    let cnt = 1, tmp = str[0];
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== tmp) rslt.push([tmp, cnt]), tmp = str[i], cnt = 0;
        cnt++;
    }
    rslt.push([tmp, cnt]);
    return rslt;
}

// BigInt型でのMathメソッド
const BigMath = {
    abs: x => x < 0n ? -x : x,
    min: (...nums) => nums.reduce((a, b) => a < b ? a : b),
    max: (...nums) => nums.reduce((a, b) => a > b ? a : b),
}

// 両端キュー
class Deque {
    constructor(array = []) {
        this.nil = { value: "" }, this.nil.next = this.nil.prev = this.nil;
        for (const value of array) this.PushTail(value);
        this._cnt = array.length;
    }
    PushHead(value) {
        const node = { value: value, next: this.nil.next, prev: this.nil }
        this.nil.next.prev = this.nil.next = node, this._cnt++;
    }
    PushTail(value) {
        const node = { value: value, next: this.nil, prev: this.nil.prev }
        this.nil.prev.next = this.nil.prev = node, this._cnt++;
    }
    PopTail() {
        const node = this.nil.prev;
        if (node.value === "") return null;
        node.prev.next = this.nil, this.nil.prev = node.prev, this._cnt--;
        return node.value;
    }
    PopHead() {
        const node = this.nil.next;
        if (node.value === "") return null;
        node.next.prev = this.nil, this.nil.next = node.next, this._cnt--;
        return node.value;
    }
    get length() { return this._cnt }
    get head() { return this.nil.next.value }
    get tail() { return this.nil.prev.value }
}
/* Nodeクラスを用いた実装
class Node {
    constructor(value = "") {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class Deque {
    constructor(arr = []) {
        this.nil = new Node();
        this.nil.next = this.nil, this.nil.prev = this.nil;
        for (const value of arr) this.PushTail(value);
        this._cnt = arr.length;
    }
    PushHead(value) {
        const node = new Node(value);
        node.next = this.nil.next; node.prev = this.nil;
        this.nil.next.prev = this.nil.next = node;
        this._cnt++;
    }
    PushTail(value) {
        const node = new Node(value);
        node.prev = this.nil.prev, node.next = this.nil;
        this.nil.prev.next = this.nil.prev = node;
        this._cnt++;
    }
    PopTail() {
        const node = this.nil.prev;
        if (node.value === "") return null;
        node.prev.next = this.nil, this.nil.prev = node.prev;
        this._cnt--;
        return node.value;
    }
    PopHead() {
        const node = this.nil.next;
        if (node.value === "") return null;
        node.next.prev = this.nil, this.nil.next = node.next;
        this._cnt--;
        return node.value;
    }
    get length() { return this._cnt }
    get head() { return this.nil.next.value }
    get tail() { return this.nil.prev.value }
}
*/
