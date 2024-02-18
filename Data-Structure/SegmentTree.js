class SegmentTree {
    // func = { 区間和: "sum", 最大値: "max", 最小値: "min", 積: "pdct", 最大公約数: "gcd" }
    constructor(arr, func) {
        this.fn = (a, b) => this._segFunc[func](a, b);
        this.dum = this._segDummy[func];
        this.len = 2 ** Math.ceil(Math.log2(arr.length));
        this.tree = new Array(2 * this.len - 1).fill(this.dum);
        arr.map((e, i) => this.update(i, e));
    }
    _segFunc = {
        sum: (a, b) => a + b,
        max: (a, b) => a > b ? a : b,
        min: (a, b) => a > b ? b : a,
        pdct: (a, b) => a * b,
        gcd: function (a, b) { return b ? this.gcd(b, a % b) : a }
    }
    _segDummy = {
        sum: 0, max: -Infinity, min: Infinity, pdct: 1, gcd: 0
    }
    // i番目をvに更新
    update(i, v) {
        i += this.len - 1;
        this.tree[i] = v;
        while (i > 0) {
            i = Math.floor((i - 1) / 2);
            this.tree[i] = this.fn(this.tree[i * 2 + 1], this.tree[i * 2 + 2]);
        }
    }
    // l以上r未満の区間での値を取得
    query = (a, b) => this._query_sub(a, b, 0, 0, this.len);
    _query_sub(a, b, k, l, r) {
        if (r <= a || b <= l) return this.dum;
        else if (a <= l && r <= b) return this.tree[k];
        else {
            const vl = this._query_sub(a, b, k * 2 + 1, l, Math.floor((l + r) / 2));
            const vr = this._query_sub(a, b, k * 2 + 2, Math.floor((l + r) / 2), r);
            return this.fn(vl, vr);
        }
    }
    // i番目(0-based)の値を取得
    get = i => this.query(i, i + 1);
}
