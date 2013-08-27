
var collections = require('../lib/collections');

exports['find one document'] = function (test) {
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

exports['find two documents'] = function (test) {
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
exports['change original document and find it'] = function (test) {
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

exports['change retrieved document and find it again'] = function (test) {
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

