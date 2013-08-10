
var collections = require('../lib/collections'),
    assert = require('assert');

// creates collection
    
var collection = collections.createCollection('people');
assert.ok(collection);
assert.equal(collection.name, 'people');

// insert data

var adam = { name: 'Adam' };
collection.insert(adam);
assert.ok(adam._id);

// retrieve data

var people = collection.find();
assert.ok(people);
assert.ok(Array.isArray(people));
assert.equal(people.length, 1);
assert.equal(people[0]._id, adam._id);
assert.equal(people[0].name, adam.name);

// insert second document

var eve = { name: 'Eve' };
collection.insert(eve);
assert.ok(eve._id);

// then retrieve data

var people = collection.find();
assert.ok(people);
assert.ok(Array.isArray(people));
assert.equal(people.length, 2);
assert.equal(people[0]._id, adam._id);
assert.equal(people[0].name, adam.name);
assert.equal(people[1]._id, eve._id);
assert.equal(people[1].name, eve.name);

// change original document and retrieve it

adam.name = "New Adam";

var people = collection.find();
assert.ok(people);
assert.ok(Array.isArray(people));
assert.equal(people.length, 2);
assert.equal(people[0]._id, adam._id);
assert.equal(people[0].name, "Adam");

// change retrieved document and retrieve it again

adam = people[0];
adam.name = "New Adam";

var people = collection.find();
assert.ok(people);
assert.ok(Array.isArray(people));
assert.equal(people.length, 2);
assert.equal(people[0]._id, adam._id);
assert.equal(people[0].name, "Adam");
