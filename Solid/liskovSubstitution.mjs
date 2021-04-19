class Rectangle {
    constructor(height, width) {
        this._height = height;
        this._width = width;
    }

    get area() {
        return this._height * this._width
    }

    get height() {
        return this._height;
    }

    get width() {
        return this._width;
    }

    set height(value) {
        this._height = value;
    }

    set width(value) {
        this._width = value;
    }

    toString() {
        return `Height x Width: ${this._height} x ${this._width}`
    }
}

class Square extends Rectangle {
    constructor(size = 5) {
        super(size, size);
    }

    get height() {
        return this._height;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._height = this._width = value;
    }

    set height(value) {
        this._height = this._width = value;
    }
}

const useIt = function(rectangle) {
    const width = rectangle.width;
    rectangle.height = 3;
    console.log(`I assume I got are equal to ${width*3}
        but I got ${rectangle.area}`)
}

const rectangle = new Rectangle(10, 5);
const square = new Square();
// violate LSP
useIt(rectangle);
useIt(square);
// console.log(rectangle.toString())
// rectangle.height = 20
// console.log(rectangle.toString())
// console.log(square.toString())
// square.height = 10
// console.log(square.toString())