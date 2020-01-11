'use strict';

import {shuffle} from './js/shuffle.js';
import {tree} from './js/familyTree.js';
import {bfs} from './js/bfs.js';
import {dfs} from './js/dfs.js';
import {deDupe} from './js/dupes';
import {anagram, anagramSort} from './js/anagram';
import {checkSchedule} from './js/schedule';
import {schedule} from './js/data/schedule';
import { JSDOM } from 'jsdom';

const { document } = (new JSDOM(`...`)).window;

let app = document.createElement('div')
app.id = 'App'
document.body.appendChild(app)

function createEl(elem, content) {
  let el = document.createElement(elem);
  el.innerHTML = content;
  return el;
}

// Shuffle
let cards = [1,5,3];
let cards2 = shuffle(cards, 5);
app.appendChild(createEl('div', '<h4>shuffled cards</h4><div>'+
    cards2+'</div>'))


// breadth first search family tree
app.appendChild(createEl('div', '<h4>breadth first find kids</h4><div>son = '+
    JSON.stringify(bfs(tree, 'son'))+'</div><div>girl = '+
    JSON.stringify(bfs(tree, 'girl'))+'</div>'))


// depth first search family tree
app.appendChild(createEl('div', '<h4>depth first find kids</h4><div>son = '+
    JSON.stringify(dfs(tree, 'boy'))+'</div><div>daughter = '+
    JSON.stringify(dfs(tree, 'daughter'))+'</div>'))

// sample reduce practice
let numbs = [1,8,3,5, 9];
let top = numbs.reduce( (prev, current) => {
  return prev = prev > current ? prev : current;
});

let bottom = numbs.reduce( (prev, current) => {
  return prev = prev < current ? prev : current;
});

app.appendChild(createEl('div', '<h4>Reduce it</h4><div>top = '+ top+'</div><div>daughter = '+ bottom+'</div>'))

// dedupe
let dupeArr = [2, 5, 8, 4, 2, 'john', 'john'];
let duped = deDupe(dupeArr);

console.log('deduped', duped);

// Aanagram
console.log('anagram 1', anagram('God', 'dog')); //true
console.log('anagram 1', anagram('Clint Eastwood', 'Old West Action')); //true
console.log('anagram 1', anagram('aa a', 'b')); //false
console.log('anagram 2', anagramSort('God', 'dog')); //true
console.log('anagram 2', anagramSort('Clint Eastwood', 'Old West Action')); //true
console.log('anagram 2', anagramSort('aa a', 'b')); //false


// schedule
let appt =   {
  time: 'June 1, 2015 4:00 pm',
  duration: 30
}
let appt2 =   {
  time: 'June 2, 2015 4:00 pm',
  duration: 30
}
let appt3 =   {
  time: 'June 1, 2015 11:00 am',
  duration: 90
}

console.log('check scheule', checkSchedule(schedule, appt)) //False = conflict
console.log('check schedule', checkSchedule(schedule, appt2)) //True = Available
console.log('check schedule', checkSchedule(schedule, appt3)) //Fale = conflict
