/**
 * AVL tree is a type of balance tree which is binary search tree.
 * where the height of the left and right subtrees of any node differs by at most one. 
 */
class AVLTreeNode {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
        this.height = 1
    }
}

class AVLTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        this.root = this._insert(this.root, data)
    }
    _insert(node, data) {
        if(!node) {
            return new AVLTreeNode(data)
        } else {
            /** insert left child */
            if(data < node.data) {
                node.left = this._insert(node.left, data)
            } else if(data > node.data) {
                node.right = this._insert(node.right, data)
            }
            this.updateHeight(node)
            return node
        }
    }

    balance(node) {
        const balanceFactor = this.getHeight(node.left) - this.getHeight(node.right)
        //left heavy
        if(balanceFactor > 1) {
            /** left-right case */
            if(this.getHeight(node.left.right) > this.getHeight(node.left.left)) {
                node.left = this.rotateLeft(node.left)
            } 
            return this.rotateRight(node)
        } 
        // right heavy
        if(balanceFactor < -1) {
            /** right-left case */
            if(this.getHeight(node.right.left) > this.getHeight(node.right.right)) {
                node.right = this.rotateRight(node.right)
            }
            return this.rotateLeft(node)
        }
        return node
    }

    rotateLeft(node) {
        let newNode = node.right
        node.right = newNode.left
        newNode.left = node
        this.updateHeight(node)
        this.updateHeight(newNode)
        return node
    }

    rotateRight(node) {
        let newNode = node.left
        node.left = newNode.right
        newNode.right = node
        this.updateHeight(node)
        this.updateHeight(newNode)
        return node
    }

    /** utility function to get height */
    getHeight(node) {
        return node ? node.height : 0
    }

    updateHeight(node) {
        if(!node) {
            return 0
        } else {
            node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
        }
    }

    inOrderTraversal () {
        let result = []
        this._inOrderTraversal(result, this.root)
        return result
    }

    _inOrderTraversal (result, node) {
        if (!node) return;
        this._inOrderTraversal(result, node.left)
        result.push(node.data)
        this._inOrderTraversal(result, node.right)
    }

}

const t1 = new AVLTree()
t1.insert(30)
t1.insert(10)
t1.insert(20)

console.log(t1.inOrderTraversal())
