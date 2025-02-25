class StackFunction {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    pushStack(element) {
        this.items[this.count] = element;
        this.count++;
        return this.count - 1;
    }

    popStack() {
        if (this.emptyStack()) {
            return 0;
        }

        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peekStack() {
        if (this.emptyStack()) {
            return 0
        }
        return this.items[this.count - 1];
    }

    emptyStack() {
        return this.count === 0;
    }

    stackSize() {
        return this.count;
    }

    clearStack() {
        this.items = [];
        this.count = 0;
    }
}
module.exports = StackFunction;