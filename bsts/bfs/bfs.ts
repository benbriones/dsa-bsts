import { BNodeNum } from "../common/bst";
import { Queue } from "../common/queue";


/** bfs(): Traverse the BST using BFS.
 * Returns an array of visited nodes. */

function bfs(node: BNodeNum | null): number[] {
  let queue = new Queue<BNodeNum>();

  let visited: number[] = [];

  if (node !== null) {
    queue.enqueue(node);
  }

  while (!queue.isEmpty()) {
    const current = queue.dequeue();

    visited.push(current.val);

    if (current.left !== null) {
      queue.enqueue(current.left);
    }
    if (current.right !== null) {
      queue.enqueue(current.right);
    }

  }
  return visited;
}

export { bfs };