class FenwickTree {
    constructor(arr) {
        this.tree = new Array(arr.length + 1).fill(0);
        for (let i = 0; i < arr.length; i++) this.add(i + 1, arr[i]);
    }
    add(i, x) {
        let bit = 1;
        while (i <= arr.length) {
            if (bit & i) this.tree[i] += x, i += bit;
            bit <<= 1;
        }
    }
    get(i) {
        let rslt = 0;
        let bit = 1;
        while (i) {
            if (bit & i) rslt += this.tree[i], i -= bit;
            bit <<= 1;
        }
        return rslt;
    }
}
