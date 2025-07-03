class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }    
}
/**
 * A binary tree is a type of tree data structure 
 * in which each node has at most two children,
 *  referred to as the left child and the right child
 */
class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        /** add root if root is null */
        if(!this.root) {
            this.root = new Node(data)
        } else {
            this._insertRecursive(this.root, data)
        }
    }

    _insertRecursive(root, data) {
        if(data < root.data) {
            if(!root.left) {
                root.left = new Node(data)
            } else {
                this._insertRecursive(root.left, data)
            }
        } else {
            if(!root.right) {
                root.right = new Node(data)
            } else {
                this._insertRecursive(root.right, data)
            }
        }
    }
    /** traverse left subtree , visit root node , traverse right subtree */
    inorderTranversal (node) {
        if(node.left) {
            this.inorderTranversal(node.left)
        }
        if(node.data) {
            console.log(node.data)
        }
        if(node.right) {
            this.inorderTranversal(node.right)
        }
    }

    /** visit root , traverse left subtree , traverse right subtree */
    preorderTraversal (node) {
        if(node.data) {
            console.log(node.data)
        }
        if(node.left) {
            this.preorderTraversal(node.left)
        } 
        if(node.right) {
            this.preorderTraversal(node.right)
        }
    }

    /** traverse left subtree, traverse right subtree, visit root */
    postorderTraversal (node) {
        if(node.left) {
            this.postorderTraversal(node.left)
        } 
        if(node.right) {
            this.postorderTraversal(node.right)
        }
        if(node.data) {
            console.log(node.data)
        }
    }
}

const binaryT1 = new BinaryTree()
binaryT1.insert(10)
binaryT1.insert(8)
binaryT1.insert(15)
binaryT1.insert(6)
binaryT1.insert(9)
binaryT1.insert(5)
binaryT1.insert(13)
binaryT1.insert(7)
binaryT1.insert(16)
console.log('******** inorder *********')
binaryT1.inorderTranversal(binaryT1.root)
console.log('******** preorder ********')
binaryT1.preorderTraversal(binaryT1.root)
console.log('******** postorder traversal ********')
binaryT1.postorderTraversal(binaryT1.root)
