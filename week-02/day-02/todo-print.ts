'use strict';

export{};

let todoText: string = ' - Buy milk\n';

todoText = todoText.slice(0, 0).concat('My todo:\n') + todoText.slice(0).concat(" - Download games\n     - Diablo");

console.log(todoText);