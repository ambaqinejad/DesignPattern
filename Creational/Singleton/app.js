const Logger = require('./logger');
const User = require('./user');
const Shop = require('./shop');


const logger = new Logger().getInstance();
logger.log('App started.');
const user = new User('Amir Hosein');
const shop = new User('Bazar');
logger.log('App finished.');

console.log(logger.getLogList())