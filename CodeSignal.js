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