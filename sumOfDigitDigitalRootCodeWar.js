/* Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2 */


function digital_root(n) {
    let addition=0
    if(n>9){ //checks if n is more than 2digit
    let str=(''+n).split('') //by adding n with '' it becomes a string and then we can use split method to put each string digit in array
    for(let i=0;i<str.length;i++){ 
      addition += parseInt(str[i]) //since it is now string we do need to parseInt to turn them back into integer
    }
    if(addition>9){  //and even after the addition if it is still 2digits or more we use recursion to put back into this function
      return digital_root(addition) //but with new argument from previous function
    } 
    
  } 
  return addition //do need exit return with recursion so it does not run infinitely
}