/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing.
 * The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
*/
/**
 * Examples
  "the-stealth-warrior" gets converted to "theStealthWarrior"
  "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 */
  function toCamelCase(str) {
    let replacedSymbols = "";
    if(str.includes('-')){
      replacedSymbols = str.replace(/-/g, ' ');
    }
    else{
      replacedSymbols = str.replace(/_/g, ' ');
    }
    let array = replacedSymbols.split(' ')
    for (let i = 1; i < array.length; i++) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1)
    }
    return array.join('');
}

describe('Tests', () => {
  it('test toSnakeCase', () => {
    expect(toCamelCase('')).toStrictEqual('');
    expect(toCamelCase('the_stealth_warrior')).toStrictEqual('theStealthWarrior');
    expect(toCamelCase('The-Stealth-Warrior')).toStrictEqual('TheStealthWarrior');
    expect(toCamelCase('A-B-C')).toStrictEqual('ABC');
  });
});

