
function Collection(name) {
    this.name = name;
}

function createCollection(name) {
    return new Collection(name);
}

module.exports = {
    createCollection: createCollection
}