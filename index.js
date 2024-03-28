const cards = ['queen of hearts', 'jack of clubs', 'ten of diamonds', 'ace of spades'];

cards.indexOf('jack of clubs'); //=> 1
cards.indexOf('jack of hearts'); //=> -1


cards.indexOf('ace of spades', 2); //=> 3
cards.indexOf('jack of clubs', 2); //=> -1 


function isOdd(element, index, array) {
    return (element % 2 === 1);
  }

  
  function isOdd(element, index, array) {
    return (element % 2 === 1);
  }
  
  [4, 6, 8, 10].find(isOdd); //=> undefined, not found
  [4, 5, 8, 10].find(isOdd); //=> 5
  [4, 5, 7, 8, 10].find(isOdd); //=> 5
  [4, 7, 5,  8, 10].find(isOdd); //=> 7

  function isOdd(element) {
    return (element % 2 === 1);
  }
  