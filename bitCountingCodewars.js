/* Write a function that takes an integer as input, 
and returns the number of bits that are equal to one in the binary representation of that number. 
You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case */


//for this problem I did look up a way to turn integer into binary format which was running .toString(2) on a provided number
var countBits = function(n) {
    let counter=0
    let snapple= n.toString(2)
    for(let i=0;i<snapple.length;i++){
      if(snapple[i]==1){ //and what is returned from n.toString(2) is string not integer
        counter++ //since we have to add bunch of 1 s, I though it was easier to just create a counter and increment that
      }
    }
    return counter
  };