class RangeSum {
    constructor(arr) {
        this.sum_array = [];
        let tmp = 0;
        for (const num of arr) {
            tmp += num;
            this.sum_array.push(tmp);
        }
    }
    // l番目以上r番目未満の区間和を取得(0-indexed)
    query(l, r) {
        return this.sum_array[r - 1] - this.sum_array[l - 1];
    }
}
