class BST_Node {
    constructor(value = 0) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = new BST_Node(-1);
    }
    Insert(v) {
        const node_v = new BST_Node(v);
        let next = this.root;
        let par;
        while (next) {
            par = next;
            next = v <= par.value ? par.left : par.right;
        }
        node_v.parent = par;
        v <= par.value ? par.left = node_v : par.right = node_v;
    }
    Find(v) {
        let node = this.root;
        while (node) {
            if (node.value === v) break;
            node = v < node.value ? node.left : node.right;
        }
        return node;
    }
    _min_node(node_v) {
        return node_v.left ? this._min_node(node_v.left) : node_v;
    }
    Delete(value) {
        let node = this.Find(value);
        if (node) {
            if (node.left && node.right) {
                let next = this._min_node(node.right).value;
                this.Delete(next);
                node.value = next;
            } else {
                let par = node.parent;
                let ch = node.left || node.right;
                if (ch) ch.parent = par;
                if (par.left === node) par.left = ch;
                if (par.right === node) par.right = ch;
            }
            return true;
        } else return false;
    }
}