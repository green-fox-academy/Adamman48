import {test} from 'tape';
import {Summarize} from './sum';

test('summarize elements of array', t => {
    const testArray = new Summarize([1,2,3,4,5]);

    let actual: number = testArray.sum();
    let expected: number = 15;

    t.equal(actual, expected);
    t.end();
});

test('empty array summarize tester', t => {
    const testArray = new Summarize([]);

    let actual: number = testArray.sum();
    let expected: number = 0;

    t.equal(actual, expected);
    t.end();
});

test('single element summarize tester', t => {
    const testArray = new Summarize([48]);

    let actual: number = testArray.sum();
    let expected: number = 48;

    t.equal(actual, expected);
    t.end();
})

test('multiple elements in array summarize tester', t => {
    const testArray = new Summarize([5, 5, 6]);

    let actual: number = testArray.sum();
    let expected: number = 16;

    t.equal(actual, expected);
    t.end();
});

test('testing "null" element in array summarizing method', t => {
    const testArray = new Summarize([null]);

    let actual: number = testArray.sum();
    let expected: number = 0;

    t.equal(actual, expected);
    t.end();
});