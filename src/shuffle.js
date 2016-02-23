'use strict';

export function shuffle(array, count) {
  array.forEach( (card, key) => {
    let len = array.length;
    let swap = Math.floor(Math.random() * len);
    array[key] = array.splice(swap, 1, card)[0];
  });
  // if shuffling multiple times
  if(count) {
    for (let i = 0; i < count; i++) {
      shuffle(array);
    }
  }
  return array;
}
