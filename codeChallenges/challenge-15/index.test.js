/**
 * Given a single input string, write a function that outputs an array of strings with every possible
 * combination of letters.
 *
 * At first, don't worry about repeated (duplicate) strings.
 *
 * What time complexity is your solution?
 *
 * Extra credit: De-duplicate your return array without using uniq().
 */
/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */
const allAnagrams = function (string) {
  let anagramsArray = [];
  const helper = function (string) {
    let originalString = string;
    let newString = string;
    if (originalString == newString) {
      return anagramsArray;
    }
    else {
      for (let i = 0; i < string.length; i++) {
        const currentCharcter = string[i];
        const charctersLeft = string.slice(0, i) + string.slice(i + 1);
        anagramsArray.push(charctersLeft + currentCharcter);
        console.log(string.split("").reverse().join(""))
      }
      newString = newString.split("").reverse().join("")
      return helper(newString, num--)
    }
  }
  return helper(string);
};

let anagrams = allAnagrams("abc");
console.log(anagrams);
