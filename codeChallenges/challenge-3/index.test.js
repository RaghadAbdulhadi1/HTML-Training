/*
For this exercise you will create a flatten function.
The function takes in any number of arguments and
flattens them into a single array.
If any of the arguments passed
in are an array then the individual objects within the array
will be flattened so that they exist at the same level as the other arguments.
Any nested arrays, no matter how deep,
should be flattened into the single array result.
The following are examples of how this function would be used
and what the expected results would be:
flatten([1, [2, 3], 4, 5, [6, 7]])
// returns [1, 2, 3, 4, 5, 6, 7]
flatten(['a', ['b', 2], 3, null, [4, 'c']])
// returns ['a', 'b', 2, 3, null, 4, 'c']
*/
const flatten = (arr) => {
    // flattenArray = [];
    // for(i=1; i < arr.length; i++){
    //     if(Array.isArray(arr[i])){
    //         for(j=1; j<arr[j].length;j++){
    //             flattenArray.push(...arr[j]);
    //             console.log("a")
    //         }
    //     }
    //     flattenArray.push(arr[i]);
    // }
    // return flattenArray;
    const checkFlatten = (arr, n) => {
        flattenArray = [];
        if(typeof(arr[n] == Array)){
            [...arr[n]].forEach(x=> flattenArray.push(x))
        };
        if(typeof(arr[n] != Array)){
            flattenArray.push(arr[n]);
        }
        else{
            return checkFlatten(arr[n+1]);
        }
    }
    return checkFlatten(arr, 0)
}
console.log(flatten([1, [2, 3], 4, 5, [6, 7]]))
// describe("Falatten", () => {
//     describe("When flatten function is called with multidimensional array ", () => {
//         it("shoud return flattened array", () => {
//             const newArray = flatten([1, [2, 3], 4, 5, [6, 7]])
//             console.log(newArray)
//             expect(newArray).toStrictEqual([1, 2, 3, 4, 5, 6, 7])
//         })
//         it("shoud return flattened array and null value for string passed in", () => {
//             const newArray = flatten(['a', ['b', 2], 3, null, [4, 'c']])
//             console.log(newArray)
//             expect(newArray).toStrictEqual(['a', 'b', 2, 3, null, 4, 'c'])
//         })
//     })
// })