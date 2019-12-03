class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    push(element) {
        this.top++;
        this.dataStore.push(element);
    }

    peek(){
        return this.dataStore[this.top - 1];
    }

    pop(element) {
        this.dataStore.pop();
        return this.dataStore[--this.top];
    }

    clear() {
        this.top = 0;
        this.dataStore = [];
    }

    length() {
        return this.top;
    }
}

let stack  = new Stack();
stack.push("Ruby");
stack.push("Diamonds");
stack.push("Amethyst");
console.log(stack);
stack.pop();
console.log(stack);