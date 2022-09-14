// ----------
// Day-18 : Wed 14 Sep - Code Challenge Number 14 - translateRomanNumeral
// ----------
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */
const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const translateRomanNumeral = (romanNumeral) => {
  // TO DO ...
  let value = 0;
  if(typeof(romanNumeral)!=='string'){
    return "invalid input";
  }
  for (i=0; i < romanNumeral.length; i++){
      const current = DIGIT_VALUES[romanNumeral[i]];
      const next = DIGIT_VALUES[romanNumeral[i+1]];
      if(!DIGIT_VALUES[romanNumeral[i]]){
        return null;
      }
      if (current < next){
          value += next - current
          i++
      } else {
          value += current
      }
  }
  return value; 
};
describe("Tests", () => {
  it("test translateRomanNumeral", () => {
    expect(translateRomanNumeral("IV")).toEqual(4)
  })
})
// Complexity: O(n)