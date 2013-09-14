
var simplemongo = require('..');

exports['get new db'] = function (test) {
    var db = simplemongo.getDocumentBase('foo');
    
    test.ok(db);
    test.equal(db.name(), 'foo');
}

exports['get new db twice'] = function (test) {
    var db = simplemongo.getDocumentBase('foo');
    var db2 = simplemongo.getDocumentBase('foo');
    
    test.ok(db === db2);
}

exports['get collection from db'] = function (test) {
    var db = simplemongo.getDocumentBase('foo');
    var coll = db.getCollection('people');
    
    test.ok(coll);
    test.equal(coll.name(), 'people');
    test.ok(coll.find);
}