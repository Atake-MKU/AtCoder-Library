class RangeSum {
    constructor(arr) {
        this.sum_array = [0];
        for (let i = 0; i < arr.length; i++) {
            const num = this.sum_array[i];
            this.sum_array.push(num + arr[i]);
        }
    }
    // l番目以上r番目未満の区間和を取得
    query(l, r) {
        return this.sum_array[r] - this.sum_array[l];
    }
}
