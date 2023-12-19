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