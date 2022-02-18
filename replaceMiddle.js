/* We define the middle of the array arr as follows:

if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.
Given array arr, your task is to find its middle, and, if it consists of two elements, replace those elements with the value of middle. Return the resulting array as the answer.

Example

For arr = [7, 2, 2, 5, 10, 7], the output should be
solution(arr) = [7, 2, 7, 10, 7].

The middle consists of two elements, 2 and 5. These two elements should be replaced with their sum, i.e. 7.

For arr = [-5, -5, 10], the output should be
solution(arr) = [-5, -5, 10].

The middle is defined as a single element -5, so the initial array with no changes should be returned. */

function solution(arr) {
    let evenMiddleIndex=(Math.floor(arr.length/2))-1
    let evenMiddlePlusIndex=Math.floor(arr.length/2)

    if(arr.length%2===0){
        let newMiddle=arr[evenMiddleIndex]+arr[evenMiddlePlusIndex]
        arr.splice(evenMiddlePlusIndex,1)
        arr[evenMiddleIndex]=newMiddle
        return arr
    } else if(arr.length%2!==0){
        return arr
    }
}

//other's solution

function solution(arr) {
    l = arr.length - 1; //here was where I though it was interesting
    if (l%2) { //so this decided if arr is even or odd if the value is 0 it means it is odd length arr and skips this if function 
                //and if it is even which means  l%2 have value(something other than 0) and which means true runs this if function
        arr[Math.floor(l/2)] += arr[Math.ceil(l/2)];
        arr.splice(Math.ceil(l/2),1);
    }
    return arr;
}