const Shapes = require("./Shapes");

class Rectangle extends Shapes {
    side1;
    side2;

    constructor(shape_name, side1, side2) {
        super(shape_name)
        this.side1 = side1;
        this.side2 = side2;
    }

    getArea() {
        return this.side1 * this.side2;
    }

    isSquare() {
        if (this.side1 === this.side2) {
            return ("This shape is a square");
        } else {
            return ("This shape is not a square");
        }
    }
}

let shape_properties = new Rectangle("Rectangle", 12, 10);
console.log("The name of your shape is: " + shape_properties.getName());
console.log("The area is: " + shape_properties.getArea());
console.log(shape_properties.isSquare());