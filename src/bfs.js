export function bfs (root, target) {
  var q = [root];

  while (q.length > 0) {
    let node = q.shift();

    if (node.value === target) {
      return node;
    }

    if (node.children.length) {
      node.children.forEach( (child) => {
        q.push(child);
      });
    }

  }
}
