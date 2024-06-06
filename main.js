/*/
You will need two classes or factories:
LinkedList class / factory, which will represent the full list.
Node class / factory, containing a value property and a link to the nextNode, set both as null by default

Build the following functions in your linked list class / factory:
append(value) adds a new node containing value to the end of the list
prepend(value) adds a new node containing value to the start of the list
size returns the total number of nodes in the list
head returns the first node in the list
tail returns the last node in the list
at(index) returns the node at the given index
pop removes the last element from the list
contains(value) returns true if the passed in value is in the list and otherwise returns false.
find(value) returns the index of the node containing value, or null if not found.
toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
insertAt(value, index) that inserts a new node with the provided value at the given index.
removeAt(index) that removes the node at the given index
 When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated
/*/

function node () {
    return {
        nodeInfo: { value: null, link: null },

        addValue(value) {
            this.nodeInfo.value = value;
        },

        addLink(link) {
            this.nodeInfo.link = link;
        }
    };
}

const myNode = node();
myNode.addValue(10);
myNode.addLink('nextNode');
console.log(myNode.nodeInfo);