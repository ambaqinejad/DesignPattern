class Document {
    //
}

class Machine {
    constructor() {
        if (this.constructor.name === 'Machine') {
            throw new Error('This is an abstract class')
        }
    }
    fax(document) {}
    print(document) {}
    scan(document) {}
}

class NewPrinter extends Machine {
    fax(document) {
        //ok
    }
    print(document) {
        //ok
    }
    scan(document) {
        //ok
    }
}

class OldPrinter extends Machine {
    fax(document) {
        //not ok but throwing an error or unimplementing is not good idea
    }
    print(document) {
        //ok
    }
    scan(document) {
        //not ok but throwing an error or unimplementing is not good idea
    }
}

// It is better to define them as interfaces but js does not have interface
class Print {

}

class Scan {

}

class Fax {

}

// Now we should extend them but js does not have multiple inheritance
// We can simulate it with creating multiple classes
class NewPrinter {
    fax() {

    }
    print() {

    }
    scan() {

    }
}

class OldPrinter {
    print() {

    }
}