class Shapes {
    #shape_name;

    constructor(shape_name) {
        this.#shape_name = shape_name;
    }

    getName() {
        return this.#shape_name;
    }
}
module.exports = Shapes;