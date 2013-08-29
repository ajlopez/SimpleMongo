
function Collection(name) {
    var maxid = 0;
    var documents = { };
    
    this.name = name;
    
    this.insert = function (document) {
        document._id = ++maxid;
        documents[document._id] = clone(document);
    }
    
    this.find = function (query) {
        var result = [];
        
        for (var n in documents) {
            var document = documents[n];
            
            if (!query || match(query, document))
                result.push(clone(document));
        }
            
        return result;
    }
}

function match(query, obj) {
    for (var n in query)
        if (query[n] !== obj[n])
            return false;
            
    return true;
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