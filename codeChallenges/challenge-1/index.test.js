/**
 * Given a single input array, write a function that outputs an unique array of values
 *
 *
 * What time complexity is your solution?
 *
 * Your solution shouldn't using any build in function.
 *
 * Credit: Write a unit tests.
 */
/**
  * example usage:
  * const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
  * console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6]
  */
 const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
 const getUniqueValues = (arrOfNum) => {
   // TO DO
   var uniqueNums = [];
   for(let i = 0; i < arrOfNum.length; i++){
    if(arrOfNum[i+1] != arrOfNum[i]){
        uniqueNums.push(arrOfNum[i]);
    };
    }
    return uniqueNums;
   };
 console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6]

//  Time compixity O(n)