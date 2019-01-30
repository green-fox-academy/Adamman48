'use strict';

class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;

    constructor (bCol: string, t: string, tCol: string) {
        this.backgroundColor = bCol;
        this.text = t;
        this.textColor = tCol;
    }
}

let p1: PostIt = new PostIt ('orange', 'Idea 1', 'blue');
let p2: PostIt = new PostIt ('pink', 'Awesome', 'black');
let p3: PostIt = new PostIt ('yellow', 'Superb', 'green');