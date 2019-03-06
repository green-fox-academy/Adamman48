'use strict';
var konzola = console.log;
// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds
var fruitList = function () {
    var fruits = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fruits[_i] = arguments[_i];
    }
    return fruits;
};
var fruitVendor = function (callback) {
    for (var i = 1; i < callback.length; i += 2) {
        konzola(callback[0]);
        setTimeout(callback, i * 1000);
    }
};
konzola(fruitVendor(fruitList('apple', 'pear', 'melon', 'grapes')));
