'use.strict';

for (let i: number = 0; i !== 500; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } else {
        continue;
    }
}