class FenwickTree {
    constructor(arr) {
        this.n = arr.length;
        this.tree = new Array(this.n + 1).fill(0);
        for (let i = 0; i < this.n; i++) this.add(i + 1, arr[i]); // 1-based index
    }

    // i 番目に x を加算
    add(i, x) {
        while (i <= this.n) {
            this.tree[i] += x;
            i += (i & -i); // LSB を加算
        }
    }

    // 1 から i までの区間和を取得
    sum(i) {
        let rslt = 0;
        while (i > 0) {
            rslt += this.tree[i];
            i -= (i & -i); // LSB を減算
        }
        return rslt;
    }

    // [l, r] の区間和を取得
    rangeSum(l, r) {
        return this.sum(r) - this.sum(l - 1);
    }
}
