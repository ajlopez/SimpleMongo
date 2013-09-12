
var collections = require('../lib/collections');

exports['remove one using query'] = function (test) {
    var collection = createCollection();
    
    collection.remove({ name: 'Adam' });

    var people = collection.find();
    
    test.ok(people);
    test.ok(Array.isArray(people));
    test.equal(people.length, 1);
    test.equal(people[0].name, "Eve");
}

function createCollection() {
    var collection = collections.createCollection('people');
    var adam = { name: 'Adam' };
    collection.insert(adam);
    var eve = { name: 'Eve' };
    collection.insert(eve);
    
    return collection;
}

