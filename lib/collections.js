
function Collection(name) {
    var maxid = 0;
    var documents = { };
    var count = 0;
    
    this.name = function () {
        return name;
    };
    
    this.insert = function (document) {
        document._id = ++maxid;
        documents[document._id] = clone(document);
        count++;
    };
    
    this.save = function (document) {
        if (!document._id)
            this.insert(document);
        else
            documents[document._id] = clone(document);
    };
    
    this.find = function (query, projection) {
        var result = [];
        
        for (var n in documents) {
            var document = documents[n];
            
            if (!query || match(query, document))
                result.push(clone(document, projection));
        }
            
        return result;
    };
    
    this.findOne = function (query, projection) {
        for (var n in documents) {
            var document = documents[n];
            
            if (!query || match(query, document))
                return clone(document, projection);
        }
            
        return null;
    };
    
    this.remove = function (query, justone) {
        var toremove = [];        
        
        for (var n in documents) {
            var document = documents[n];
            
            if (!query || match(query, document)) {
                toremove.push(n);
                
                if (justone)
                    break;
            }
        }
        
        for (var n in toremove) {
            delete documents[toremove[n]];
            count--;
        }
    };
    
    this.update = function (query, update, upsert, multi) {
        var updated = 0;
        
        for (var n in documents) {
            var document = documents[n];
            
            if (!query || match(query, document)) {
                var newdocument = clone(update);
                newdocument._id = document._id;
                documents[document._id] = newdocument;
                updated++;
                
                if (!multi)
                    break;
            }
        }
        
        if (updated == 0 && upsert)
            this.insert(update);
    };
    
    this.count = function () {
        return count;
    };
}

function match(query, obj) {
    for (var n in query)
        if (query[n] !== obj[n])
            return false;
            
    return true;
}

function clone(obj, projection) {
    var newobj = { }
    
    if (projection) {
        if (obj._id)
            newobj._id = obj._id;
            
        for (var n in projection)
            if (projection[n])
                newobj[n] = obj[n];
    }
    else
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