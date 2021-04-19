const colors = Object.freeze({
    red: 'red',
    green: 'green',
    blue: 'blue'
});

const sizes = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large'
});

class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

// open for extension, close for modification

class ProductFilter {
    // filterByColor(products, color) {
    //     return products.filter(product => product.color === color);
    // }

    // filterBySize(products, size) {
    //     return products.filter(product => product.size === size);
    // }

    // filterBySizeAndColor(products, size, color) {
    //     return products.filter(product => product.size === size && product.color === color);
    // }
}

class ColorSpecification {
    constructor(color) {
        this.color = color;
    }

    isSatisfied(item) {
        return item.color === this.color;
    }
}

class SizeSpecification {
    constructor(size) {
        this.size = size;
    }

    isSatisfied(item) {
        return item.size === this.size;
    }
}

class BetterFilter {
    filter(items, specification) {
        return items.filter(item => specification.isSatisfied(item));
    }
}

class AndSpecification {
    constructor(...specifications) {
        this.specifications = specifications;
    }

    isSatisfied(item) {
        return this.specifications.every(specification => specification.isSatisfied(item));
    }
}

const apple = new Product('Apple', colors.green, sizes.small);
const tree = new Product('Tree', colors.green, sizes.large);
const house = new Product('Apple', colors.blue, sizes.large);

const products = [apple, tree, house];

// const productFiler = new ProductFilter();

// for (const filteredProduct of productFiler.filterByColor(products, colors.green)) {
//     console.log(`* ${filteredProduct.name}'s color is ${colors.green}`);
// }

const betterFilter = new BetterFilter();
let filteredProducts = betterFilter.filter(products, new ColorSpecification(colors.green));
for (const filteredProduct of filteredProducts) {
    console.log(`* ${filteredProduct.name}'s color is ${colors.green}`);
}


const andSpecifications = new AndSpecification(
    new ColorSpecification(colors.green),
    new SizeSpecification(sizes.large)
)

filteredProducts = betterFilter.filter(products, andSpecifications);
for (const filteredProduct of filteredProducts) {
    console.log(`* ${filteredProduct.name}`);
}