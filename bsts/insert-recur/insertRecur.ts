import { BNode, BNodeNum, BNodeStr, BSTNum } from "../common/bst";

/** insertRecursively(val): Insert a new node into the BST with value val.
 * Uses recursion. */

function insertRecur(bst: BSTNum, val: number): void {
  const newNode = new BNodeNum(val);

  if (bst.root === null) {
    bst.root = newNode;
  } else {
    nodeInsert(bst.root, val);
  }

  function nodeInsert(node: BNodeNum, val: number): void {
    if (node.val > val) {
      if (!node.left) {
        node.left = new BNodeNum(val);
      } else {
        nodeInsert(node.left, val);
      }
    } else {
      if (!node.right) {
        node.right = new BNodeNum(val);
      } else {
        nodeInsert(node.right, val);
      }
    }
  }

}

export { insertRecur };

