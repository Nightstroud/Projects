class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.linkedList = new Node("Head")
    }

    insert(newElement, item) {
        let newNode = new Node(newElement);
        let current = this.findLast(item);
        newNode.next = current.next;
        current.next = newNode;
        this.display();
    }

    find(item) {
        let currNode = this.linkedList;
        if (item !== null) {
            while (currNode.element !== item) {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    findLast() {
        let currNode = this.linkedList;
            while (currNode.next !== null) {
                currNode = currNode.next;
            }
        return currNode;
    }

    remove(item) {
        let prevNode = this.findPrevious(item);
        if(!(prevNode.next === null)) {
            prevNode.next = prevNode.next.next;
        }
        this.display();
    }

    findPrevious(item) {
        let currentNode = this.linkedList;
        while(!(currentNode.next === null) && (currentNode.next.element !== item)){
            currentNode = currentNode.next
        }
        return currentNode;
    }

    display() {
        let placeholder = document.getElementById("list");
        placeholder.innerHTML = "";
        let currentNode = this.linkedList.next;
        while(!(currentNode === null)) {
                placeholder.innerHTML += `<li>${currentNode.element}</li>`;
                currentNode = currentNode.next;
        }
    }
}

let donuts = new LinkedList();