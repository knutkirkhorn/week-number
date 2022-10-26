import {expectType} from 'tsd';
import weekNumber, {yesterdayWeekNumber, tomorrowWeekNumber} from '.';

expectType<Number>(weekNumber());
expectType<Number>(weekNumber(new Date()));
expectType<Number>(weekNumber('September 3, 2019 13:33:37'));
expectType<Number>(yesterdayWeekNumber());
expectType<Number>(tomorrowWeekNumber());
