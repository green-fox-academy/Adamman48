'use strict';

export{};

let url: string = 'http//www.reddit.com/r/nevertellmethebots';

url = url.slice(0, url.indexOf('/')).concat(':') + url.slice(url.indexOf('/'), url.indexOf('bots')).concat('odds');

console.log(url);