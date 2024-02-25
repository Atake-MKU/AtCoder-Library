class PriorityQueue {
    // asc = { 昇順:1, 降順:-1 }
    constructor(asc = 1) {
        this.heap = [];
        this.asc = asc;
    }
    push(value, priority = value) {
        priority *= this.asc;
        const Q = this.heap; Q.push([value, priority]);
        for (let i = Q.length - 1, p; i > 0; i = p) {
            p = i - 1 >> 1;
            if (Q[p][1] < priority) break;
            Q[i] = Q[p], Q[p] = [value, priority];
        }
    }
    pop() {
        const Q = this.heap, r = Q[0], [a, b] = Q.pop(), l = Q.length, f = n => (n << 1) + 1;
        if (l) Q[0] = [a, b];
        for (let i = 0, t; f(i) < l; i = t) {
            t = f(i);
            if (t < l - 1 && Q[t][1] > Q[t + 1][1]) t++;
            if (Q[t][1] > Q[i][1]) break;
            const tmp = Q[i];
            Q[i] = Q[t], Q[t] = tmp;
        }
        return [r[0], this.asc * r[1]];
    }
    get length() { return this.heap.length }
    get top() { return [this.heap[0][0], this.heap[0][1] * this.asc] }
}
