// map class implementation
// this is a very simple version and does not consider performance optimization or complex data structures. 
// since it uses the indexOf method of the key array to locate keys, performance may degrade with large datasets. 
// additionally, it does not include features like the original Map's iterator or forEach method. 
// this example will help you understand the core functionalities of Map and provide a basic imitation.
class simpleMap {
    constructor() {
        this.keys = [];
        this.values = [];
    }

    set(key, value) {
        const index = this.keys.indexOf(key);
        // if there is no existing key, make a key and value
        if (index === -1) {
            this.keys.push(key);
            this.values.push(value);
        } else { // if there is existing key, overwrite the existing value
            this.values[index] = value;
        }
    }

    get(key) {
        const index = this.keys.indexOf(key);
        // if there's existing key return the value, if not return undefined
        const returnValue = index !== -1 ? this.values[index] : undefined;
        return returnValue;
    }

    has(key) {
        const index = this.keys.indexOf(key);
        // if there's existing key, return true, if not, return false 
        const returnValue = index !== -1 ? true : false;
        return returnValue; 
    }

    delete(key) {
        const index= this.keys.indexOf(key);
        // if there's existing key, delete the value and return true 
        if (index !== -1) {
            this.keys.splice(index, 1); 
            this.values.splice(index, 1);
            return true;  
        } 

        // if there's no existing key, return false.
        return false;
    }

    clear() {
        this.keys = [];
        this.values = [];
    }

    size() {
        return this.keys.length;
    }
}

const map = new simpleMap();