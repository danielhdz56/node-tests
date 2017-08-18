const expect = require('expect');

const utils = require('./utils')

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
});

it('should async add two numbers', (done) => { // use done as an argument to let mocha know to wait until done is called to test the async code
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should square a number', () => {
    var res = utils.square(5);
    expect(res).toBe(25).toBeA('number');
});

it('should async square a number', (done) => {
    utils.asyncSquare(5, (square) => {
        expect(square).toBe(25).toBeA('number');
        done();
    });
})

it('should expect some value not equal another value', () => {
    expect(12).toNotBe(11); //checks equality for strings and numbers
});

it('should expect two objects(arrays) to be equal', () => {
    expect({name: 'Daniel'}).toEqual({name: 'Daniel'}); //checks equality for objects and array
});

it('should expect an array to have a value', () => {
    expect([2,3,4]).toInclude(3); //checks if an array includes some value
})

it('should expect an array to not have a value', () => {
    expect([2,3,4]).toExclude(5);
});

it('should expect an object to have a particular property value', () => {
    expect({
        name: 'Daniel',
        age: 23,
        location: 'Houston'
    }).toInclude({
        age: 23
    })
});

it('should verify first and last names are set', () => {
    var user = {
        location: 'Houston',
        age: 23
    };
    var res = utils.setName(user, 'Daniel Hernandez');
    expect(res).toInclude({
        firstName: 'Daniel',
        lastName: 'Hernandez'
    }).toBeA('object');
});