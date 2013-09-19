
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

exports['count after two inserts'] = function (test) {
    var collection = collections.createCollection('people');
    var adam = { name: 'Adam' };
    collection.insert(adam);
    var eve = { name: 'Eve' };
    collection.insert(eve);
    test.equal(2, collection.count());
}

exports['count after two inserts and one remove'] = function (test) {
    var collection = collections.createCollection('people');
    var adam = { name: 'Adam' };
    collection.insert(adam);
    var eve = { name: 'Eve' };
    collection.insert(eve);
    collection.remove({ name: 'Adam' });
    test.equal(1, collection.count());
}

exports['count on empty collection'] = function (test) {
    var collection = collections.createCollection('people');
    test.equal(0, collection.count());
}


