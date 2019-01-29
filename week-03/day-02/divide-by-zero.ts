'use strict';

export{};

function divByTen(input: number) {
    if (input === 0) {
        return console.log('fail');
    } else {
        input = input / 10;
        return console.log(input);
    }
}

divByTen(0);