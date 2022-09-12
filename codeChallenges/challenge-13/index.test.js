// ----------
// Day-15 : Mon 12 Sep - Code Challange Number 13 - isSubsetOf
// ----------
/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.
 * To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * const a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * const b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 */
/*
 * Extra credit:
Make the method work for arrays that contain objects and/or arrays as elements.
*/
// eslint-disable-next-line no-extend-native
Array.prototype.isSubsetOf = function (target) {
  for (let i = 0; i < this.length; i++) {
    if (target.includes(this[i])) {
      continue;
    }
    return false;
  }
  return true;
};
const a = ["commit", "push"];
console.log(a.isSubsetOf(["commit", "rebase", "push", "blame"]));

const b = ['merge','reset','reset']
console.log(b.isSubsetOf(['reset','merge','add','commit']));

// Complexity O(n^2)