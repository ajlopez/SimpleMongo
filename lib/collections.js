
function Collection(name) {
    var maxid = 0;
    this.name = name;
    
    this.insert = function (document) {
        document._id = ++maxid;
    }
}

function createCollection(name) {
    return new Collection(name);
}

module.exports = {
    createCollection: createCollection
}