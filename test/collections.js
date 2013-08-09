
var collections = require('../lib/collections'),
    assert = require('assert');

// creates collection
    
var collection = collections.createCollection('people');
assert.ok(collection);
assert.equal(collection.name, 'people');