
var collections = require('../lib/collections');

exports['null in empty collection'] = function (test) {
	var collection = collections.createCollection('people');
	var doc = collection.findOne();
	test.equal(doc, null);
}

exports['find one document'] = function (test) {
    var collection = collections.createCollection('people');
    var adam = { name: 'Adam' };
    collection.insert(adam);
    var doc = collection.findOne();
    test.ok(doc);
    test.equal(doc._id, adam._id);
    test.equal(doc.name, adam.name);
}

exports['find one documents with empty query'] = function (test) {
    var collection = collections.createCollection('people');
    var adam = { name: 'Adam', age: 800 };
    collection.insert(adam);
    var eve = { name: 'Eve', age: 700 };
    collection.insert(eve);
    
    var doc = collection.findOne({ });
    test.ok(doc);
    test.equal(doc._id, adam._id);
    test.equal(doc.name, adam.name);
    test.equal(doc.age, adam.age);
}

exports['find one document with projection'] = function (test) {
    var collection = collections.createCollection('people');
    var adam = { name: 'Adam', age: 800 };
    collection.insert(adam);
    var eve = { name: 'Eve', age: 700 };
    collection.insert(eve);
    
    var doc = collection.findOne({ }, { name: true });
    test.ok(doc);
    test.equal(doc._id, adam._id);
    test.equal(doc.name, adam.name);
    test.ok(doc.age === undefined);
}

exports['find one with query by example'] = function (test) {
    var collection = collections.createCollection('people');
    var adam = { name: 'Adam' };
    collection.insert(adam);
    var eve = { name: 'Eve' };
    collection.insert(eve);

    var doc = collection.findOne({ name: 'Eve' });
    
    test.ok(doc);
    test.equal(doc._id, eve._id);
    test.equal(doc.name, "Eve");
}

