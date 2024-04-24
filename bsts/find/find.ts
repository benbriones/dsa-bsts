import { BNodeNum } from "../common/bst";


/** findRecursively(val): Search from the invoking node for a node with value val.
 * Returns the node, if found; else null */

function findRecursively(node: BNodeNum | null, val: number): BNodeNum | null {
  if (node === null) {
    return null;
  }
  if (node.val === val) {
    return node;
  }
  node = val > node.val ? node.right : node.left;
  return findRecursively(node, val);
}


/** find(val): Search the BST for a node with value val.
 * Returns the node, if found; else null. */

function find(node: BNodeNum | null, val: number): BNodeNum | null {
  while (node) {
    if (val === node.val) {
      return node;
    }
    node = val > node.val ? node.right : node.left;
  }
  return null;
}

export { findRecursively, find };