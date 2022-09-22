/**
 * A prime number is an integer number that cannot be divided by any number
 * except itself and 1.
 * Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */
 const primeTester = function (n) {
    if(n == 1){
        return "not prime nor composite"
    }
    if(n % 2 == 0 || n % 3 == 0){
        return false;
    }
    for(let i = 0; i > 1; i++) {
        if(n % i != 0) {
            return false;
        }
        break;
    }
    return true;
}
describe('PrimeTesting', () => {
  describe('When the function is called', () => {
    it('should return not prime nor composite if the number is 1', () => {
      const result = primeTester(1)
      expect(result).toStrictEqual("not prime nor composite")
    })
    it('should return true if the number is prime', () => {
      const result1 = primeTester(11)
      const result2 = primeTester(-11)
      expect(result1).toBeTruthy()
      expect(result2).toBeTruthy()
    })
    it('should return false if the number is not prime', () => {
      const result1 = primeTester(4)
      const result2 = primeTester(0)
      expect(result1).toBeFalsy()
      expect(result2).toBeFalsy()
    })
  })
})