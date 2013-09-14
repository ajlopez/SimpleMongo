
var collections = require('./collections');

var bases = { };

function DocumentBase(name) {
    var colls = { };
    
    this.name = function () {
        return name;
    }
    
    this.getCollection = function (name) {
        if (!colls[name])
            colls[name] = collections.createCollection(name);
            
        return colls[name];
    }
}

function getDocumentBase(name) {
    if (!bases[name])
        bases[name] = new DocumentBase(name);
        
    return bases[name];
}

module.exports = {
    getDocumentBase: getDocumentBase
}