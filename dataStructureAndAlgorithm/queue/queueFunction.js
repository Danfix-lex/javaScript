class QueueFunction {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    emptyQueue() {
        return this.count === 0;
    }

    addQueue(element) {
        this.items[this.count] = element;
        this.count++;
        return this.count - 1;
    }

    queueSize() {
        return this.count;
    }

    removeQueue() {
        if (this.emptyQueue()) {
            return 0
        }

        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    clearQueue() {
        this.items = []
        this.count = 0;
    }

    peekQueue() {
        if (this.emptyQueue()) {
            return 0
        }
        return this.items[this.count - 1];
    }
}
module.exports = QueueFunction;