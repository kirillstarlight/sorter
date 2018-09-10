class Sorter {
  constructor() {
    this._store = [];
    this._comparator = function(a, b) {
        return a - b;
    }
}

add(element) {
    this._store.push(element);
}

at(index) {
    return this._store[index];
}

get length() {
    return this._store.length;
}

toArray() {
    return this._store;
}

sort(indices) {
    const tempArray = [];
    let i = 0;
    indices.sort(function(a, b) {
        return a - b;
    });
    for (i = 0; i < indices.length; i++) {
        tempArray.push(this._store[indices[i]]);
    }
    tempArray.sort(this._comparator);
    for (i = 0; i < indices.length; i++) {
        this._store[indices[i]] = tempArray[i];
    }
}

setComparator(compareFunction) {
    this._comparator = compareFunction;
}
}

module.exports = Sorter;