'use strict';

export{};

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require('fs');
let inputFile: string = 'logs.txt'

function getIP(inputData: string) {
    let numOfItems: number = fs.readFileSync(inputData, 'utf-8').split('\n').length;
    let createArray: string[] = fs.readFileSync(inputData, 'utf-8').split(' ');
    let IParray: string[] = [];

    for (let i: number = 8; IParray.length < numOfItems; i = i + 12) {
        IParray.push(createArray[i]);
    } 
    return console.log(IParray);
}

getIP(inputFile);

function getPostRatio(inputData: string) {
    let numOfPosts: number = (fs.readFileSync(inputData, 'utf-8').split('POST').length) - 1;
    let numOfGets: number = (fs.readFileSync(inputData, 'utf-8').split('GET').length) - 1;
    let ratio: number = numOfGets / numOfPosts;

    return console.log('Gets/Posts ratio: ' + ratio.toFixed(2));
}

getPostRatio(inputFile);