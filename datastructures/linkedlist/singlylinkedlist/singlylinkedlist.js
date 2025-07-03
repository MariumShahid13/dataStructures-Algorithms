class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class SinglyLinkedList {
    head_ptr = null
    tail_ptr = null
    
    /** insert value in list */
    insert(data, index) {
        try {
            let l = this.getLength()
            /** insert at start */
            if(index === 0) {
                let n = new Node(data)
                n.next = this.head_ptr
                this.head_ptr = n
                if(l === 0) {
                    this.tail_ptr = this.head_ptr
                }
            }
            /** insert at end */
            else if(index ===  l) {
                let n = new Node(data)
                this.tail_ptr.next = n
                this.tail_ptr = n
            }

        else {
            if((index > l) || (index < 0)) {
                throw new Error('index is out of bound')
            } else {
                /** iterate through list to find index to insert value */
                let count = 0
                let previous = null
                let current = this.head_ptr
                while(count < index) {
                    previous = current
                    current = current.next
                    count = count + 1
                }

                let n = new Node(data)
                previous.next = n
                n.next = current
            }
        }

        } catch (error) {
            console.log(error)
            return error
        }
    }

    /** delete value from list */
    delete(index) {
        let l = this.getLength()
        try {
            /** delete from first node */
            if(index === 0 && l >= 1) {
                let current = this.head_ptr
                current = current.next
                this.head_ptr.next = null
                this.head_ptr = current
                current = null
            }
            /** delete from last node */
            else if(index === l - 1 && l > 1) {
                let current = this.head_ptr
                let previous = null
                let count = 0
                while(count < index) {
                    count++
                    previous = current
                    current = current.next
                }

                this.tail_ptr = previous
                this.tail_ptr.next = null
                current = null
                previous = null
            } else {
                if((index > l) || (index < 0)) {
                    throw new Error('index is out of bound in delete')
                } else {
                    let current = this.head_ptr
                    let previous = null
                    let count = 0
                    while(count < index) {
                        count++
                        previous = current
                        current = current.next
                    }

                    previous.next = current.next
                    current.next = null
                    current = null
                    previous = null
                }
            }
        } catch (error) {
            console.log(error)
            return error
        }
    }

    /** search value from list */
    search(value) {
        let current = this.head_ptr
        let index = -1
        let count = 0
        while(current !== null) {
            if(current.data === value) {
                index = count
            }
            count++
            current = current.next
        }
        return index
    }

    /** iterate through list */
    printList() {
        let current = this.head_ptr
        let str = ""
        while(current != null) {
            str = str + current.data + "=>"
            current = current.next
        }  
        str = str.substr(0, str.length - 2)
        return str
    }

    /** length of list */
    getLength() {
        let current = this.head_ptr
        let count = 0
        while(current != null) {
            count++
            current = current.next
        }
        return count
    }
}


let s1 = new SinglyLinkedList()
s1.insert(1,0)
s1.insert(2,1)
s1.insert(3,2)
s1.insert(4,1)
console.log(s1.printList())

// s1.delete(-1)
// console.log(s1.printList())
console.log(s1.search(100))

