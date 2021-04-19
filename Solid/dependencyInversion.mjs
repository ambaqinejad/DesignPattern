class Person {
    constructor(name) {
        this.name = name;
    }
}
// low level module
class Browser {
    constructor() {
        if (this.constructor.name === 'Browser') {
            throw new Error('Browser is an abstract class')
        }
    }

    findChildrenOf(name) {}
}

class Relationship extends Browser {
    constructor() {
        super();
        this.data = [];
    }

    addParentToChildRel(parent, child) {
        this.data.push({
            from: parent,
            to: child,
            relType: 'Parent to Child Relationship'
        })
    }

    findChildrenOf(name) {
        return this.data.filter(rel => rel.from.name = name)
            .map(rel => rel.to)
    }
}

// high level module
class Research {
    constructor(browser) {
        this.browser = browser;
    }

    showResult() {
        for (const child of this.browser.findChildrenOf('John')) {
            console.log(`${child.name} is John's child.`)
        }
    }
}


const parent = new Person('John');
const child1 = new Person('Jim');
const child2 = new Person('Jack');

const relationship = new Relationship();
relationship.addParentToChildRel(parent, child1)
relationship.addParentToChildRel(parent, child2)

const research = new Research(relationship);
research.showResult();