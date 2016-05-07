'use strict';

export function dfs (root, target) {
  var found;
  if (root.value === target) {
    return found = root;
  }
  (function dig(children, target) {
    children.forEach( (child) => {
      if (child.value === target) {
        return found = child;
      } else if (child.children.length) {
        return dig(child.children, target);
      }
    });
  })(root.children, target);
  return found;
}
