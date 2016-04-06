'use strict';

import {shuffle} from './shuffle.js';
import {tree} from './familyTree.js';
import {bfs} from './bfs.js';
import {dfs} from './dfs.js';
import colors from 'colors';
import {deDupe} from './dupes';

colors.setTheme({
  rainbow: 'rainbow',
  error: 'red'
});


// Shuffle
let cards = [1,5,3];
let cards2 = shuffle(cards, 5);
console.log('shuffled'.rainbow, cards2);


// breadth first search family tree
var girl = bfs(tree, 'girl');
var son = bfs(tree, 'son');
console.log('that\'s my boy'.rainbow, son);
console.log('that\'s my baby girl'.rainbow, girl);


// depth first search family tree
var boy = dfs(tree, 'boy');
var daughter = dfs(tree, 'daughter');
console.log('that\'s my baby boy'.rainbow, boy);
console.log('that\'s my girl'.rainbow, daughter);

// sample reduce practice
let numbs = [1,8,3,5, 9];
let top = numbs.reduce( (prev, current) => {
  return prev = prev > current ? prev : current;
});

let bottom = numbs.reduce( (prev, current) => {
  return prev = prev < current ? prev : current;
});

console.log('top'.error, top);
console.log('bottom'.error, bottom);

// dedupe
let dupeArr = [2, 5, 8, 4, 2, 'john', 'john'];
let duped = deDupe(dupeArr);

console.log('deduped'.error, duped);
