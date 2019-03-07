'use strict';

import { chopArray } from './karate-chop';
import {test} from 'tape';

test ('check if searched value index is correct from input array', t => {
  let actual: number = chopArray(-2, [-6, -3, -2, 0, 3, 7, 90, 170, 2030, 9000]);
  let expected: number = 2;

  t.equal(actual, expected);
  t.end();
});

test ('check if search for non-existent element returns -1', t => {
  let actual: number = chopArray(3, [2, 4, 6, 43, 56, 69, 70, 8877, 10000000000]);
  let expected: number = -1;

  t.equal(actual, expected);
  t.end();
})

/* test ('check if search in non-integer input array search result returns error message', t => {
  let actual: number = chopArray(3, ['a', 'b', 'd', 'x', 'z']);
  let expected: string = 'Invalid input list!';

  t.equal(actual, expected);
  t.end();
}) */

test ('check if search in unsorted integer input array search result returns error message', t => {
  let actual: number = chopArray(2, [9000, 60, 89, 2, 0, -6, 870, 56]);
  let expected: string = 'Invalid input list!';

  t.equal(actual, expected);
  t.end();
})