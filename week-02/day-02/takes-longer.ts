'use strict';

export{};

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';

quote = quote.slice(0, quote.indexOf(' you')).concat(' always takes longer than') + quote.slice(quote.indexOf(' you'));

console.log(quote);