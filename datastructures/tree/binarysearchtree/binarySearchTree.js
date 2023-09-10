class BinaryTreeNode {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }    
}
/**
 * A Binary Search Tree (BST) is a type of binary tree that has the following properties:
 * Value Ordering: For every node in the BST, all nodes in its left subtree have values less than the node's value, 
 * and all nodes in its right subtree have values greater than the node's value.
 * Unique Values: Each node in the BST has a unique value.
 */
class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(data){
        this.root = this._insertRecursive(this.root, data)
    }
    _insertRecursive(node, data) {
        if(!node) {
            return new BinaryTreeNode(data)
        } 
        if(data < node.data) {
            node.left = this._insertRecursive(node.left, data)
        } else if(data > node.data) {
            node.right = this._insertRecursive(node.right, data)
        }
        return node
    }

    search(data) {
        return this._searchRecursive(this.root, data)
    }

    _searchRecursive(node, data) {
        if(!node || node.data === data) {
            return node
        }
        if(data < node.data) {
            return this._searchRecursive(node.left, data)
        } else if(data > node.data) {
            return this._searchRecursive(node.right, data)
        }
    }

    /** traverse left subtree , visit root node , traverse right subtree
     * in binary search tree inorder traversal gives sorted data
     */
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
}

// Creating a Binary Search Tree
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(2);
bst.insert(8);
bst.insert(1);
bst.insert(3);
bst.insert(7);
bst.insert(9);

bst.inorderTranversal(bst.root)
console.log(bst.search(11))




