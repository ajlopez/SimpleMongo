
function Collection(name) {
    var maxid = 0;
    var documents = { };
    
    this.name = name;
    
    this.insert = function (document) {
        document._id = ++maxid;
        documents[document._id] = clone(document);
    }
    
    this.find = function () {
        var result = [];
        
        for (var n in documents)
            result.push(documents[n]);
            
        return result;
    }
}

function clone(obj) {
    var newobj = { }
    
    for (var n in obj)
        newobj[n] = obj[n];
        
    return newobj;
}

function createCollection(name) {
    return new Collection(name);
}

module.exports = {
    createCollection: createCollection
}