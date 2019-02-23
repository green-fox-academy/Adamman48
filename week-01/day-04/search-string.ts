'use strict';

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one (will return string instead)

function stringSearch(string: string, keyword: string) : string {
  string.toLocaleLowerCase();
  keyword.toLocaleLowerCase();  
  let position = string.indexOf(keyword);
  
  return position > -1 ?
    `The keyword was found at the position of the ${position}. character.` :
      `The keyword was not found in the provided text.`;
}

console.log(stringSearch('I find your lack of faith disturbing.', 'lack'));