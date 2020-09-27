/*
JavaScript Algorithms and Data Structures Masterclass
Coding Exercise 27: DLL unshift 

Implement unshift on a DoublyLinkedList class.

This function should accept a value and add a node to the beginning of a doubly linked list with the given value.  It should return the DLL.
*/

class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.val = val
        this.next = null;      
    }
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    unshift(){
        
    }
}
