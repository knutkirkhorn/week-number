import {expectType} from 'tsd';
import weekNumber = require('.');

expectType<Date>(weekNumber());
expectType<Date>(weekNumber(new Date()));
expectType<Date>(weekNumber('September 3, 2019 13:33:37'));
