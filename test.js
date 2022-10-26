// eslint-disable-next-line import/no-unresolved
import test from 'ava';
import weekNumber, {yesterdayWeekNumber, tomorrowWeekNumber} from './index.js';

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

test('yesterday is previous week if current day is monday and not at the start of the year', t => {
	// Mock current time to Monday (September 2, 2019)
	const realNow = Date.now;
	Date.now = () => new Date('September 2, 2019').getTime();

	const resultYesterday = yesterdayWeekNumber();
	const resultGivenDate = weekNumber('September 2, 2019');

	// Restore mocked date
	Date.now = realNow;

	t.is(resultYesterday, resultGivenDate - 1);
});

test('yesterday is same week if current day is tuesday and not at the start of the year', t => {
	// Mock current time to Monday (September 2, 2019)
	const realNow = Date.now;
	Date.now = () => new Date('September 3, 2019').getTime();

	const resultYesterday = yesterdayWeekNumber();
	const resultGivenDate = weekNumber('September 2, 2019');

	// Restore mocked date
	Date.now = realNow;

	t.is(resultYesterday, resultGivenDate);
});

test('tomorrow is next week if current day is sunday and not at the end of the year', t => {
	// Mock current time to Sunday (September 8, 2019)
	const realNow = Date.now;
	Date.now = () => new Date('September 8, 2019').getTime();

	const resultTomorrow = tomorrowWeekNumber();
	const resultGivenDate = weekNumber('September 8, 2019');

	// Restore mocked date
	Date.now = realNow;

	t.is(resultTomorrow, resultGivenDate + 1);
});

test('tomorrow is same week if current day is saturday and not at the end of the year', t => {
	// Mock current time to Sunday (September 8, 2019)
	const realNow = Date.now;
	Date.now = () => new Date('September 7, 2019').getTime();

	const resultTomorrow = tomorrowWeekNumber();
	const resultGivenDate = weekNumber('September 7, 2019');

	// Restore mocked date
	Date.now = realNow;

	t.is(resultTomorrow, resultGivenDate);
});

test('invalid input throws error', t => {
	t.throws(() => weekNumber(1337));
});

test('invalid input string throws error', t => {
	t.throws(() => weekNumber('invalid date :)'));
});
