import {test} from 'tape';
import {Summarize} from './sum';

test('summarize elements of array', t => {
    const testArray = new Summarize([1,2,3,4,5]);

    let actual: number = testArray.sum();
    let expected: number = 15;

    t.equal(actual, expected);
    t.end();
});