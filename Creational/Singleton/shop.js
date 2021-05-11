const Logger = require('./logger')

class Shop {

    constructor(shopName) {
        this.shopName = shopName;
        const logger = new Logger().getInstance();
        logger.log(`{this.shopName} was created.`)
    }
}

module.exports = Shop;