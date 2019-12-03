class List {
    constructor() {
        this.collection = [];
    }

    insert(...object) {
        this.collection.push(...object);
        for (let i = 0; i < this.collection.length; i++) {
            if (this.collection[i].key === undefined) {
                this.collection.splice(i, 1);
                i--;
            }
        }
        this.sort(this.collection);
    }

    contains(object) {
        let result;
        for (let i = 0; i < this.collection.length; i++) {
            result = this.collection[i].key === object;
            if (result === true) {
                return result;
            }
        }
        if (result === undefined) {
            return false;
        }
        return result;
    }

    toString() {
        let result = "";
        for (let i = 0; i < this.collection.length; i++) {
            result += `${this.collection[i].key}`;
            if (i !== this.collection.length - 1) {
                result += ',';
            }
        }
        return result;
    }

    sort (arr = null) {
        if (arr === null) {
            return;
        }
        if (arr.length < 2) {
            return arr;
        }
        let current1 = null, current2 = null, myArr = arr;

        while (this.CheckArray(arr) !== true) {
            for (let i = arr.length - 1; i > 0; i--) {
                current1 = arr[i];
                current2 = arr[i - 1];
                if (current2.key > current1.key) {
                    myArr.splice(i - 1, 2, current1, current2);
                }
            }
        }
        return myArr
    }


    CheckArray (arr = null) {
        if (arr === null) {
            return;
        }
        if (arr.length < 2) {
            return arr;
        }
        let result;
        let proceed = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i].key <= arr[i + 1].key && proceed === true) {
                result = true;
            }
            else {result = false; proceed = false;}
        }
        return result;
    }

    remove(key) {
        for (let i = 0; i < this.collection.length; i++) {
            if (this.collection[i].key === key) {
                this.collection.splice(i, 1);
                i--
            }
        }
    }

    size() {
        return this.collection.length;
    }
}