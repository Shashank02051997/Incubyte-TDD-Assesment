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

    describe('Task 2', () => {
        beforeEach(() => {
            this.stringCalc = new StringCalculator();
        });

        it('Calculate empty string', () => {
            assert.strictEqual(this.stringCalc.calculate(''), 0);
        });

        it('Calculate simple string with one element', () => {
            assert.strictEqual(this.stringCalc.calculate('1'), 1);
        });

        it('Calculate simple string with one element 2', () => {
            assert.strictEqual(this.stringCalc.calculate('9'), 9);
        });

        it('Calculate simple string with two elements', () => {
            assert.strictEqual(this.stringCalc.calculate('1,0'), 1);
        });

        it('Calculate simple string with two elements 2', () => {
            assert.strictEqual(this.stringCalc.calculate('1,133'), 134);
        });

        it('Calculate simple string with 3 elements ', () => {
            assert.strictEqual(this.stringCalc.calculate('5,6,7'), 18);
        });

        it('Calculate simple string with "\\n" delimiter ', () => {
            assert.strictEqual(this.stringCalc.calculate('5\n6\n7', '\n'), 18);
        });

        it('Calculate simple string with ";" delimiter ', () => {
            assert.strictEqual(this.stringCalc.calculate('5;6;7', ';'), 18);
        });
    });

});
