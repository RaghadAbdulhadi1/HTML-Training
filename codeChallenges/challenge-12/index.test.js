/*
You have to create a function
that takes an array of integer number and returns the
second max in the array:
Note : using sort native is not allowed
Exanmples:
secondMax([1,5, 2])== 2
secondMax([-1, -5, 2])== -1
*/
const secondMax = function(array) {
    // TODO
    let firstMax = -Infinity;
    let secondMax = -Infinity;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > firstMax) {
            secondMax = firstMax;
            firstMax = array[i];
        }
        else if (array[i] != firstMax && array[i] > secondMax) {
          secondMax = array[i];
        }
    }
    return secondMax;
  };
  // Complexity: O(n)