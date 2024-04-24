import { BNodeNum } from "../common/bst";

/** inOrder(): Traverse from the invoking node using in-order DFS.
 * Returns an array of visited nodes. */

function inOrder(node: BNodeNum | null): number[] {
  if (!node) return [];

  let nodes: number[] = [];

  if (node!.left) nodes.push(...inOrder(node.left));

  nodes.push(node.val);

  if (node!.right) nodes.push(...inOrder(node.right));

  return nodes;
}



/** inOrderAccum(): Traverse the BST using in-order DFS.
 * Returns an array of visited nodes.
 * Uses an "accumulator"
 */

function inOrderAccum(
  node: BNodeNum | null = null,
  accum: number[] = []): number[] {
  if (!node) return accum;

  inOrderAccum(node.left, accum);

  accum.push(node.val);

  inOrderAccum(node.right, accum);

  return accum; //TODO: check solution
}


export { inOrder, inOrderAccum };
