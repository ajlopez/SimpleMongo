
var collections = require('../lib/collections');

exports['save new person'] = function (test) {
    var collection = createCollection();
    
    collection.save({ name: 'Abel', age: 500 });

    var people = collection.find({ name: 'Abel' });
    
    test.ok(people);
    test.ok(Array.isArray(people));
    test.equal(people.length, 1);
    test.equal(people[0].name, 'Abel');
    test.equal(people[0].age, 500);
}

exports['save existing person'] = function (test) {
    var collection = createCollection();
    
    collection.save({ _id: 1, name: 'Adam', age: 801 });

    var people = collection.find({ name: 'Adam' });
    
    test.ok(people);
    test.ok(Array.isArray(people));
    test.equal(people.length, 1);
    test.equal(people[0].name, 'Adam');
    test.equal(people[0].age, 801);
}

function createCollection() {
    var collection = collections.createCollection('people');
    var adam = { name: 'Adam', age: 800 };
    collection.insert(adam);
    var eve = { name: 'Eve', age: 700 };
    collection.insert(eve);
    
    return collection;
}

