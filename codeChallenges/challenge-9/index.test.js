/*
You have to create a function
that takes a positive integer number and returns the
next bigger number formed by the same digits:
Exanmples:
nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:
nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/
const nextBigger = function(num) {
    const toArray = Array.from(String(num), Number);
    [toArray[toArray.length - 2], toArray[toArray.length - 1]] = [toArray[toArray.length - 1], toArray[toArray.length - 2]];
    const swapedNum = +toArray.join("");

    if(swapedNum < num || swapedNum == num || toArray.length == 1) {
        return -1;
    }
    else {
        return swapedNum;
    }
};
console.log(nextBigger(573))

// Complexity 0(n)