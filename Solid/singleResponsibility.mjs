import fs from 'fs';

class Journal {
    constructor() {
        this.entries = [];
        this.count = 0
    }

    addEntry(journal) {
        this.count++;
        const entry = `${this.count}: ${journal}`;
        this.entries.push(entry);
    }

    removeEntry(index) {
        this.entries.splice(index, 1);
        this.count--;
    }

    toString() {
        return this.entries.join('\n');
    }

    // anti patterns 
    // imagine that we want to work with some files and save or load with some files.
    // this is good idea to have other class for working with files.


    // saveToFile(fileName) {
    //     fs.writeFileSync(fileName, this.toString())
    // }

    // loadFromFile(fileName) {
    //     // Some codes
    // }

    // loadFromURL(url) {
    //     // Some codes
    // }
}

class PersistenceManager {

    preprocessJournal(journal) {
        // Some Codes
    }

    saveToFile(fileName, journal) {
        fs.writeFileSync(fileName, journal.toString());
    }

    loadFromFile(fileName) {
        // Some codes
    }

    loadFromURL(url) {
        // Some codes
    }
}

const journal = new Journal();
journal.addEntry('I started learning Design Patterns.');
journal.addEntry('I started learning TypeScript.');
console.log(journal.toString());
const persistenceManager = new PersistenceManager();
persistenceManager.saveToFile('journal.txt', journal);