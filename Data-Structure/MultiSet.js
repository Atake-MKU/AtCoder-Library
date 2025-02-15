class MultiSet {
    constructor(arr = []) {
        this.map = new Map();
        this.zero = 0;
        this.cnt = 0;
        for (const value of arr) this.add(value);
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
    get size() { return this.map.size - this.zero };
    clear = () => this.map.clear();
    clone() {
        const newMultiSet = new MultiSet();
        this.map.forEach((value, key) => newMultiSet.map.set(key, value));
        return newMultiSet;
    }
    get max() {
        let max = 0;
        for (const value of this.map.values()) if (max < value) max = value;
        return max;
    }
    get = num => this.map.get(num);
}
