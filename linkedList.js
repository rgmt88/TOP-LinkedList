/*/
insertAt(value, index) that inserts a new node with the provided value at the given index.
removeAt(index) that removes the node at the given index
/*/
// Start a counter for fake addresses
let addressCounter = 1000;

function createNode(value = null) {
    const address = `0x${(addressCounter++).toString(16)}`;
    return {
        address: address,
        value: value,
        next: null
    };
}

function linkedList() {
    return {
        head: null,
        tail: null,
        length: 0,

        // Method to append a node to the end of the list
        append(value) {
            const newNode = createNode(value);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.length++;
        },

        // Method to prepend a node to the beginning of the list
        prepend(value) {
            const newNode = createNode(value);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.tail = this.head;
                this.head = newNode;
            }
            this.length++;
        },

        // Method to get the size of the list
        size() {
            return this.length;
        },

        // Method to get the first node in the list
        getHead() {
            return this.head;
        },

        // Method to get the last node in the list
        getTail() {
            return this.tail;
        },

        // Method returns the node at the given index
        atIndex(index) {
            if (index < 0 || index >= this.length) {
                return null;
            }
            
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }

            return current;
        },

        // Method removes the last element from the list
        pop() {
            if (this.length === 0) {
                return null;
            }

            if (this.length === 1) {
                const lastNode = this.head;
                this.head = null;
                this.tail = null;
                this.length--;
                // Return the removed node
                return lastNode;
            }

            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next;
            }

            const lastNode = this.tail;
            current.next = null;
            this.tail = current;
            this.length--;
            // Return the removed node
            return lastNode;
        },

        // Method returns true if the passed in value is in the list and otherwise returns false.
        contains(value) {
            let current = this.head;
            while (current !== null) {
                if (current.value === value) {
                    return true;
                }
                current = current.next;
            }
            return false;
        },

        // Method returns the index of the node containing value, or null if not found.
        find(value) {
            let current = this.head;
            let index = 0;
            while (current !== null) {
                if (current.value === value) {
                    return index;
                }
                current = current.next;
                index++;
            }
            return null;    
        },

        // Represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
        toString() {
            let linkedList = '';
            let current = this.head;
            while (current !== null) {
                linkedList += `( ${current.value} ) ->`;
                current = current.next;
            }
            linkedList += 'null';
            return linkedList;
        },

        // 
    }
}

