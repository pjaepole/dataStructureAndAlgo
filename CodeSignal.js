/* Given an integer size, return array of length size filled with 1s.

Example

For size = 4, the output should be
solution(size) = [1, 1, 1, 1].

Input/Output

[execution time limit] 4 seconds (js)

[input] integer size

A positive integer.

Guaranteed constraints:
1 ≤ size ≤ 1000.

[output] array.integer */

function solution(size) {
    let arr=[]
    for(let i=0; i<size; i++){
        arr.push(1)
    }
    return arr
}

/* Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

Example

For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
solution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3]. */

function solution(inputArray, elemToReplace, substitutionElem) {
    for(let i=0;i<inputArray.length; i++){
        if(inputArray[i]==elemToReplace){
            inputArray[i]=substitutionElem
        }
    }
    return inputArray
}

//other solution 
function solution(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(i=> i==elemToReplace ? substitutionElem : i)}
//what this person did was used map array function to map through the array and if i the element insdie the array is equal to elemToReplace
//statement is true then it replaces it with substitutionElem if i==elemToReplace is false it leave it be 


// Problem first reverse try
// Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.
// Given an array arr, swap its first and last elements and return the resulting array.
// Example
// For arr = [1, 2, 3, 4, 5], the output should be
// solution(arr) = [5, 2, 3, 4, 1].
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] array.integer arr
// Guaranteed constraints:
// 0 ≤ arr.length ≤ 50,
// -104 ≤ arr[i] ≤ 104.
// [output] array.integer
// Array arr with its first and its last elements swapped.
function solution(arr) {
    if(arr.length==0){
        return arr
    }
    let arrHead=arr[0]
    let arrTail=arr[arr.length-1]
    arr[0]=arrTail
    arr[arr.length-1]=arrHead
    return arr
}
// Concatenate Array
// Given two arrays of integers a and b, obtain the array formed by the elements of a followed by the elements of b.

// Example

// For a = [2, 2, 1] and b = [10, 11], the output should be
// solution(a, b) = [2, 2, 1, 10, 11].

function solution(a, b) {
    let returnArray=[]
    for(let i of a){
        returnArray.push(i)
    }
    for(let i of b){
        returnArray.push(i)
    }
    return returnArray
}