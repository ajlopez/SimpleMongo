
var collections = require('../lib/collections');

exports['creates collection'] = function (test) {
    var collection = collections.createCollection('people');
    test.ok(collection);
    test.equal(collection.name(), 'people');
}

exports['insert data'] = function (test) {
    var collection = collections.createCollection('people');
    var adam = { name: 'Adam' };
    collection.insert(adam);
    test.ok(adam._id);
}

exports['insert second document'] = function (test) {
    var collection = collections.createCollection('people');
    var adam = { name: 'Adam' };
    collection.insert(adam);
    var eve = { name: 'Eve' };
    collection.insert(eve);
    test.ok(eve._id);
}

