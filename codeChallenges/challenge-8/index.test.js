/**
 * Write a function that takes an integer as input,
 * and returns the number of bits
 * that are equal to one in the binary representation of that number.
 * You can guarantee that input is non-negative.
 * Example: The binary representation of 1234 is 10011010010,
 * so the function should return 5 in this case
 */
const bitCounting = (num) => {
    // TODO
    const bitCountingR = (num, numberOfBits) => {
        if(num == 0){
            return numberOfBits;
        }else{
            numberOfBits.unshift(num % 2);
            return bitCountingR(Math.floor(num / 2), numberOfBits)
        }
    };
    return bitCountingR(num, []).join('')
}

// Complexity: O(log(n))