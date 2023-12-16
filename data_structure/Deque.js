class Node {
    constructor(value = "") {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class Deque {
    constructor(arr = []) {
        this.nil = new Node();
        this.nil.next = this.nil, this.nil.prev = this.nil;
        for (const value of arr) this.PushTail(value);
        this._cnt = arr.length;
    }
    PushHead(value) {
        const node = new Node(value);
        node.next = this.nil.next; node.prev = this.nil;
        this.nil.next.prev = this.nil.next = node;
        this._cnt++;
    }
    PushTail(value) {
        const node = new Node(value);
        node.prev = this.nil.prev, node.next = this.nil;
        this.nil.prev.next = this.nil.prev = node;
        this._cnt++;
    }
    PopTail() {
        const node = this.nil.prev;
        if (node.value === "") return null;
        node.prev.next = this.nil, this.nil.prev = node.prev;
        this._cnt--;
        return node.value;
    }
    PopHead() {
        const node = this.nil.next;
        if (node.value === "") return null;
        node.next.prev = this.nil, this.nil.next = node.next;
        this._cnt--;
        return node.value;
    }
    get length() { return this._cnt }
    get head() { return this.nil.next.value }
    get tail() { return this.nil.prev.value }
}