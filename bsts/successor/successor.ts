import { BNodeNum } from "../common/bst";

/** findSuccessor(node): Find and return node with next largest value.
 * Returns null if no successor. */

function findSuccessor(node: BNodeNum | null): BNodeNum | null {
  if (!node?.right) {
    return null;
  };
  let successor = node.right;
  while (successor.left) {
    successor = successor.left;
  }
  return successor;
}

export { findSuccessor };