// ----------
// Day-13 : Tue 6 Sep - Code Challange Number 11 - removeDuplication 
// ----------
/**
 * Complete the method/function so that it removes the duplication letter
*/
/**
 * Examples
  "hello"  gets converted to "helo"
  "absadsasdasdad"  gets converted to "absd"
  "good morning"  gets converted to "god mrni"
 */
function removeDuplication(str) {
  // return to do ...
  const strArray = str.split("");
  const noDuplicates = new Set(strArray);
  return Array.from(noDuplicates).join("");
}
// describe('Tests', () => {
//   it('test removeDuplication', () => {
//     expect(removeDuplication('hello')).toStrictEqual('helo')
//     expect(removeDuplication('absadsasdasdad')).toStrictEqual('absd')
//     expect(removeDuplication('good morning')).toStrictEqual('god mrni')
//   })
// })

console.log(removeDuplication("good morning"))