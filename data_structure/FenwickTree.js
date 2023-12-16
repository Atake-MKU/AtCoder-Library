class FenwickTree {
    constructor(arr) {
        const l = arr.length; this.tree = new Array(l + 1).fill(0);
        for (let i = 0; i < l; i++) this.update(i, arr[i]);
    }
    update(i, v) { i++; while (i < this.tree.length) this.tree[i] += v, i += i & -i }
    sum(i) { let t = 0; while (i > 0) t += this.tree[i], i -= i & -i; return t }
}