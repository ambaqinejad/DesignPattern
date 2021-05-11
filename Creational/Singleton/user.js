const Logger = require('./logger');

class User {

    constructor(username) {
        this.username = username;
        const logger = new Logger().getInstance();
        logger.log(`${this.username} was logged in.`)
    }
}

module.exports = User;