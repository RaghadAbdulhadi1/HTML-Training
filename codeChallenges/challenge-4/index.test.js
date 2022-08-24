/**
 * Complete the method/function so that it converts dash/underscore delimited words or any type from camel casing to snake case
 * The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
 */

/**
 * Examples
  "theStealthWarrior"  gets converted to "the-stealth-warrior"
  "TheStealthWarrior"  gets converted to "The_Stealth_Warrior"
 */

  function toSnakeCase(str) {
    if (str.length == 0){
        return str;
    }
    else{
        let toLower = str.toLowerCase()
        let split = toLower.split(/(?=[A-Z]) || [ A-Za-z]/)
        let dashedString = split.join()
        return dashedString;
    }
} 
// console.log(toSnakeCase('ABC'))
describe("toSnakeCase ", () => {
  describe("When toSnake methode is invoked", () => {
    it("should convert empty string to empty string", () => {
      expect(toSnakeCase("")).toStrictEqual("");
    });

    it("should convert non-empty string to snake_case string", () => {
      expect(toSnakeCase("theStealthWarrior")).toStrictEqual(
        "the_stealth_warrior"
      );
      expect(toSnakeCase("TheStealthWarrior")).toStrictEqual(
        "the_stealth_warrior"
      );
      expect(toSnakeCase("ABC")).toStrictEqual("a_b_c");
    });
  });
});