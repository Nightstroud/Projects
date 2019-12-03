class BinarySearchTree {
    constructor() {
        this.collection = [];
    }

    insert(element) {
        if (this.collection.length === 0) {
            this.collection.push(new Node(element));
            return;
        }
        let tempCollection = null;
        while (this.find(element) === false) {
            if (tempCollection === null) {
                tempCollection = this.collection[0]
            }
            if (tempCollection.left !== null) {
                if (element === tempCollection.left.element) {
                    return "Invalid Input";
                }
            }
            if (element === tempCollection.element) {
                return "Invalid Input";
            }
            if (tempCollection.right !== null) {
                if (element === tempCollection.right.element) {
                    return "Invalid Input";
                }
            }
            if (element < tempCollection.element && tempCollection.left === null) {
                tempCollection.left = new Node(element);
            }
            else if (element > tempCollection.element && tempCollection.right === null) {
                tempCollection.right = new Node(element);
            }
            else {
                if (tempCollection.element < element) {
                    tempCollection = tempCollection.right;
                }
                else if (tempCollection.element > element) {
                    tempCollection = tempCollection.left;
                }
            }
        }
    }

    find(element) {
        if (this.collection.length >! 0) {
            return false;
        }
        let tempCollection = this.collection[0];
        while (1 === 1) {
            if (tempCollection.element === element) {
                return tempCollection;
            }
            if (tempCollection.element < element) {
                if (tempCollection.right === null) {
                    return false;
                }
                tempCollection = tempCollection.right;
            }
            if (tempCollection.element > element) {
                if (tempCollection.left === null) {
                    return false;
                }
                tempCollection = tempCollection.left;
            }
        }
    }

    remove(element) {
        if (this.find(element) === "Invalid Input") {
            return "Invalid Input";
        }
        if (this.collection.length >! 0) {
            return "Invalid Input";
        }
        let tempCollection = this.collection[0];
        if (tempCollection.element === element) {
            this.collection = [];
        }
        while (1 === 1) {
            if (tempCollection.element < element) {
                if (tempCollection.right.element === element) {
                    if (tempCollection.right.right === null) {
                        if (tempCollection.right.left === null) {
                            tempCollection.right = null;
                            return;
                        }
                        else {
                            tempCollection.right = tempCollection.right.left;
                            return;
                        }
                    }
                    else if (tempCollection.right.left === null) {
                        if (tempCollection.right.right !== null){
                            tempCollection.right = tempCollection.right.right;
                            return;
                        }
                    }
                    let tempCollection2 = tempCollection.right;
                    tempCollection.right = tempCollection.right.right;
                    tempCollection.right.left = tempCollection2;
                    return;
                }
                else tempCollection = tempCollection.right;
            }
            if (tempCollection.element > element) {
                if (tempCollection.left.element === element) {
                    if (tempCollection.left.right === null) {
                        if (tempCollection.left.left === null) {
                            tempCollection.left = null;
                            return;
                        }
                        else {
                            tempCollection.left = tempCollection.left.left;
                            return;
                        }
                    }
                    else if (tempCollection.left.left === null) {
                        if (tempCollection.left.right !== null){
                            tempCollection.left = tempCollection.left.right;
                            return;
                        }
                    }
                    let tempCollection2 = tempCollection.left;
                    tempCollection.left = tempCollection.left.right;
                    tempCollection.left.left = tempCollection2;
                    return;
                }
                else tempCollection = tempCollection.left;
            }
        }
    }

    print() {
        let container = document.getElementById("container");
        container.innerHTML = `<p style="font-size: 30px;">This is the string showing the structure of the tree.</p>
                               <p>${JSON.stringify(this.collection)}</p>`;
    }


}

class Node {
    constructor(element) {
        this.element = element;
        this.right = null;
        this.left = null;
    }
}

let searchTree = new BinarySearchTree();

searchTree.insert(10);
searchTree.insert(11);
searchTree.insert(12);
searchTree.insert(13);
searchTree.insert(15);
searchTree.insert(14);
searchTree.insert(9);
searchTree.insert(8);
searchTree.insert(7);
searchTree.remove(11);
searchTree.print();