
var collections = require('../lib/collections');

exports['creates collection'] = function (test) {
    var collection = collections.createCollection('people');
    test.ok(collection);
    test.equal(collection.name, 'people');
}

exports['insert data'] = function (test) {
    var collection = collections.createCollection('people');
    var adam = { name: 'Adam' };
    collection.insert(adam);
    test.ok(adam._id);
}

exports['retrieve data'] = function (test) {
    var collection = collections.createCollection('people');
    var adam = { name: 'Adam' };
    collection.insert(adam);
    var people = collection.find();
    test.ok(people);
    test.ok(Array.isArray(people));
    test.equal(people.length, 1);
    test.equal(people[0]._id, adam._id);
    test.equal(people[0].name, adam.name);
}

exports['insert second document'] = function (test) {
    var collection = collections.createCollection('people');
    var adam = { name: 'Adam' };
    collection.insert(adam);
    var eve = { name: 'Eve' };
    collection.insert(eve);
    test.ok(eve._id);
}

exports['then retrieve data'] = function (test) {
    var collection = collections.createCollection('people');
    var adam = { name: 'Adam' };
    collection.insert(adam);
    var eve = { name: 'Eve' };
    collection.insert(eve);
    
    var people = collection.find();
    test.ok(people);
    test.ok(Array.isArray(people));
    test.equal(people.length, 2);
    test.equal(people[0]._id, adam._id);
    test.equal(people[0].name, adam.name);
    test.equal(people[1]._id, eve._id);
    test.equal(people[1].name, eve.name);
}

exports['change original document and retrieve it'] = function (test) {
    var collection = collections.createCollection('people');
    var adam = { name: 'Adam' };
    collection.insert(adam);
    var eve = { name: 'Eve' };
    collection.insert(eve);

    adam.name = "New Adam";

    var people = collection.find();
    test.ok(people);
    test.ok(Array.isArray(people));
    test.equal(people.length, 2);
    test.equal(people[0]._id, adam._id);
    test.equal(people[0].name, "Adam");
}

exports['change retrieved document and retrieve it again'] = function (test) {
    var collection = collections.createCollection('people');
    var adam = { name: 'Adam' };
    collection.insert(adam);
    var eve = { name: 'Eve' };
    collection.insert(eve);
    
    var people = collection.find();
    adam = people[0];
    adam.name = "New Adam";

    var people = collection.find();
    test.ok(people);
    test.ok(Array.isArray(people));
    test.equal(people.length, 2);
    test.equal(people[0]._id, adam._id);
    test.equal(people[0].name, "Adam");
}

