import {Apple} from './apples';
import {test} from 'tape';

test ('return apple', t => {
    const fruit = new Apple;

    let actual = fruit.getApple();
    let expected = 'apple';

    t.equal(actual, expected);
    t.end();
});