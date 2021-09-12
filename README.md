# week-number
> 📅 Get the [ISO 8601](https://en.wikipedia.org/wiki/ISO_week_date) week number of a date

## Installation
```
$ npm install @knutkirkhorn/week-number
```

## Usage
```js
const weekNumber = require('@knutkirkhorn/week-number');

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

## License
MIT © [Knut Kirkhorn](LICENSE)
