class Logger {

    constructor() {
        this.logList = [];
    }

    getLogList() {
        return this.logList;
    }

    log(message) {
        const loggedAt = new Date().toISOString();
        this.logList.push({ message, loggedAt });
        console.log(message);
    }

}

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Logger();
        }
    }

    getInstance() {
        return Singleton.instance;
    }
}

module.exports = Singleton;