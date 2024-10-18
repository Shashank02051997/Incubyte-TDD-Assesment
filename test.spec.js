const assert = require('assert');

const FizzBazz = require('./src/FizzBazz');

describe('TestTDD', () => {
    describe('Task 1', () => {
        beforeEach(() => {
            this.fizzBazz = new FizzBazz();
        });

        it('Check "1"', () => {
            assert.strictEqual(this.fizzBazz.returnMagicNumber(1), "1");
        });

        it('Check "2"', () => {
            assert.strictEqual(this.fizzBazz.returnMagicNumber(2), "2");
        });

    });


});
