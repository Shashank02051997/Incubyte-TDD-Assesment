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

        it('Check "3"/"Fizz"', () => {
            assert.strictEqual(this.fizzBazz.returnMagicNumber(3), "Fizz");
        });

        it('Check "4"', () => {
            assert.strictEqual(this.fizzBazz.returnMagicNumber(4), "4");
        });

        it('Check "5"/"Bazz"', () => {
            assert.strictEqual(this.fizzBazz.returnMagicNumber(5), "Bazz");
        });

        it('Check "6"', () => {
            assert.strictEqual(this.fizzBazz.returnMagicNumber(6), "Fizz");
        });

        it('Check "15"', () => {
            assert.strictEqual(this.fizzBazz.returnMagicNumber(15), "FizzBazz");
        });

        it('Check "45"', () => {
            assert.strictEqual(this.fizzBazz.returnMagicNumber(45), "FizzBazz");
        });
    });


});
