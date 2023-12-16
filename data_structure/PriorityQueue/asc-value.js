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
}