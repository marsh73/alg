'use strict';

export function deDupe (arr) {
  const duped = [];
  for (let item of arr) {
    if(duped.indexOf(item) === -1){
      duped.push(item);
    }
  }
  return duped;
}
