import { BNodeNum, BSTNum } from "../common/bst";
import { findSuccessor } from "../successor/successor";
import { find } from "../find/find";


/** remove(bst, val): Removes a node in the BST with the value val.
 * Returns the removed node. */


function remove(bst: BSTNum, val: number): BNodeNum | null {
  let toRemove = find(bst, val);

  if (!toRemove) {
    return null;
  }
  //no children
  if (!toRemove.left && !toRemove.right) {

    if (bst.root === toRemove) {
      bst.root = null;
    }

    toRemove = null;

    //two children
  } else if (toRemove.left && toRemove.right) {
    const successor = findSuccessor(toRemove);

    if (toRemove === bst.root) {
      bst.root = successor;
    }

    remove(bst, successor!.val);

    toRemove.val = successor!.val;

    //one child
  } else {
    if (bst.root === toRemove) {
      bst.root = toRemove.left || toRemove.right;
    } else if (toRemove.right) {
      const successor = findSuccessor(toRemove);
      remove(bst, successor!.val);
      toRemove.val = successor!.val;
    } else {
      remove(bst, toRemove.left!.val);
      toRemove.val = toRemove.left!.val;
    }
  }
  return toRemove;
}








export { remove };
