// eslint-disable-next-line import/no-unresolved
import test from 'ava';
import weekNumber from './index.js';

test('current date returns a number', t => {
	const expectedResult = 'number';
	const result = typeof weekNumber();

	t.is(result, expectedResult);
});

test('new date returns a number', t => {
	const expectedResult = 'number';
	const result = typeof weekNumber(new Date());

	t.is(result, expectedResult);
});

test('defaults to today', t => {
	const resultDefault = typeof weekNumber();
	const resultExplicit = typeof weekNumber(new Date());

	t.is(resultDefault, resultExplicit);
});

test('input string date returns a number', t => {
	const expectedResult = 'number';
	const result = typeof weekNumber('September 3, 2019 13:33:37');

	t.is(result, expectedResult);
});

test('input string date returns a week number', t => {
	const expectedResult = 36;
	const result = weekNumber('September 3, 2019 13:33:37');

	t.is(result, expectedResult);
});

test('yesterday is same or previous week', t => {
	const resultYesterday = weekNumber.yesterday();
	const resultToday = weekNumber();

	t.truthy((resultToday === resultYesterday) || (resultToday - resultYesterday === 1))
})

test('tomorrow is same or next week', t => {
	const resultTomorrow = weekNumber.tomorrow();
	const resultToday = weekNumber();

	t.truthy((resultToday === resultTomorrow) || (resultTomorrow - resultToday === 1))
})

test('invalid input throws error', t => {
	t.throws(() => weekNumber(1337));
});

test('invalid input string throws error', t => {
	t.throws(() => weekNumber('invalid date :)'));
});
