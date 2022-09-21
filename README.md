# week-number
> 📅 Get the [ISO 8601](https://en.wikipedia.org/wiki/ISO_week_date) week number of a date

## Installation
```sh
npm install @knutkirkhorn/week-number
```

## Usage
```js
import weekNumber from '@knutkirkhorn/week-number';

console.log(weekNumber());
// => 36

console.log(weekNumber(new Date()));
// => 36

console.log(weekNumber('September 3, 2019 13:33:37'));
// => 36
```

## API
### weekNumber([date])
Returns the [ISO 8601](https://en.wikipedia.org/wiki/ISO_week_date) week number of a date. If not date is passed, the current date is used.

## Related
- [week-number-cli](https://github.com/knutkirkhorn/week-number-cli) - CLI for this module
