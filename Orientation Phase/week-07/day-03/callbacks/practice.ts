const useCallback = (callbackend) => {
  callbackend('Chewing out a rhythm on my bubble gum');
  callbackend('The sun is out and I want some');
  callbackend('It\'s not hard, not far to reach, we can hitch a ride to Rockaway Beach');
};

const printSentence = (sentence) => {
 console.log(sentence);
};

useCallback(printSentence);