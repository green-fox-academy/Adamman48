import {test} from 'tape';
import {letterCounter} from './count-letters';

test('counting letters and filtering out all other kinds of characters', t => {
    let testString: string = 'POulsu 78 ?*%$~ __-- hahaha'

    let actual: number = Object.keys(letterCounter(testString))  //Object.values() doesn't seem to work.
    .map(key => letterCounter(testString)[key])                  //Creating an array of object keys and matching it with object's values.
    .reduce((prevValue, currentValue) => {return prevValue + currentValue}, 0);
    let expected: number = 12;

    t.equal(actual, expected);
    t.end();
})