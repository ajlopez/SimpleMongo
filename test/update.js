
var collections = require('../lib/collections');

exports['update adam age'] = function (test) {
    var collection = createCollection();
    
    collection.update({ name: 'Adam' }, { name: 'Adam', age: 801 });

    var people = collection.find({ name: 'Adam' });
    
    test.ok(people);
    test.ok(Array.isArray(people));
    test.equal(people.length, 1);
    test.equal(people[0].name, 'Adam');
    test.equal(people[0].age, 801);
}

exports['update none'] = function (test) {
    var collection = createCollection();
    
    collection.update({ name: 'New' }, { name: 'New', age: 100 });

    var people = collection.find({ name: 'New' });
    
    test.ok(people);
    test.ok(Array.isArray(people));
    test.equal(people.length, 0);
}

exports['update new upsert'] = function (test) {
    var collection = createCollection();
    
    collection.update({ name: 'New' }, { name: 'New', age: 100 }, true);

    var people = collection.find({ name: 'New' });
    
    test.ok(people);
    test.ok(Array.isArray(people));
    test.equal(people.length, 1);
    test.equal(people[0].name, 'New');
    test.equal(people[0].age, 100);
}

exports['update all'] = function (test) {
    var collection = createCollection();
    
    collection.update(null, { name: 'New', age: 100 }, null, true);

    var people = collection.find();
    
    test.ok(people);
    test.ok(Array.isArray(people));
    test.equal(people.length, 2);
    test.equal(people[0].name, 'New');
    test.equal(people[0].age, 100);
    test.equal(people[1].name, 'New');
    test.equal(people[1].age, 100);
}

exports['add kind'] = function (test) {
    var collection = createCollection();
    
    collection.update({ name: 'Adam' }, { name: 'Adam', age: 800, kind: 'human' });

    var people = collection.find({ name: 'Adam' });
    
    test.ok(people);
    test.ok(Array.isArray(people));
    test.equal(people.length, 1);
    test.equal(people[0].name, 'Adam');
    test.equal(people[0].age, 800);
    test.equal(people[0].kind, 'human');
}

function createCollection() {
    var collection = collections.createCollection('people');
    var adam = { name: 'Adam', age: 800 };
    collection.insert(adam);
    var eve = { name: 'Eve', age: 700 };
    collection.insert(eve);
    
    return collection;
}

