import test from 'ava';
import weekNumber from '.';

test('current date returns a number', t => {
    const expectedResult = 'number';
    const result = typeof weekNumber();

    t.is(result, expectedResult);
});

test('input string date returns a number', t => {
    const expectedResult = 'number';
    const result = typeof weekNumber('September 3, 2019 23:15:30');

    t.is(result, expectedResult);
});

test('invalid input throws error', t => {
    t.throws(() => weekNumber(1337));
});

test('invalid input string throws error', t => {
    t.throws(() => weekNumber('invalid date :)'));
});