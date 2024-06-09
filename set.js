// set class implementation
// this is a very simple version and does not consider performance optimization or complex data structures. 
// since it uses the indexOf method of the key array to locate values, performance may degrade with large datasets.
// indexOf has O(n) time complexity for searching 
// additionally, it does not include features like the original Set's iterator or forEach method. 
// this example will help you understand the core functionalities of Set and provide a basic imitation.
class simpleSet {
    constructor() {
        this.values = [];
    }

    // add value if there's no same value existing 
    add(value) {
        const index = this.values.indexOf(value);
        if (index === -1) this.values.push(value);
    }

    // delete value and return true if it exists, if not, return false
    delete(value) {
        const index = this.values.indexOf(value);
        if (index !== -1) { 
            this.values.splice(index, 1);
            return true
        } 
        
        return false;
    }

    // if value exists return true, if not, return false
    has(value) {
        const index = this.values.indexOf(value);
        if (index !== -1) return true;
        return false;
    }

    // return the size of set
    size() {
        return this.values.length;
    }

    // remove all values
    clear() {
        this.values = [];
    }
}

const set = new simpleSet();

