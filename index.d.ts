/**
Get the [ISO 8601](https://en.wikipedia.org/wiki/ISO_week_date) week number of a date
@param date - The date to get week number for.
@returns Week number of given date.
@example
```
import weekNumber from '@knutkirkhorn/week-number';

console.log(weekNumber());
// => 36

console.log(weekNumber(new Date()));
// => 36

console.log(weekNumber('September 3, 2019 13:33:37'));
// => 36
```
*/
export default function weekNumber(date: Date | string | void): Number;

/**
Get the [ISO 8601](https://en.wikipedia.org/wiki/ISO_week_date) week number of yesterday
@returns Week number of yesterday.
@example
```
import {yesterdayWeekNumber} from '@knutkirkhorn/week-number';

console.log(yesterdayWeekNumber());
// => 36
```
*/
export function yesterdayWeekNumber(): Number;

/**
Get the [ISO 8601](https://en.wikipedia.org/wiki/ISO_week_date) week number of tomorrow
@returns Week number of tomorrow.
@example
```
import {tomorrowWeekNumber} from '@knutkirkhorn/week-number';

console.log(tomorrowWeekNumber());
// => 36
```
*/
export function tomorrowWeekNumber(): Number;
