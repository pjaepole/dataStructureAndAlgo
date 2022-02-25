/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890" */

function createPhoneNumber(numbers){
    let returnString='('
    for(let i=0;i<numbers.length;i++){
      if(i<3){
        returnString+=numbers[i]
      } else if(i===3){
        returnString+=`) ${numbers[i]}`
      } else if(i<=5){
        returnString+=numbers[i]
      } else if(i===6){
        returnString+=`-${numbers[i]}`
      } else if(i>6){
        returnString+=numbers[i]
      }
    }
  return returnString
}

/* String.prototype.replace()
The replace() method 
returns a new string with some or 
all matches of a pattern replaced by a replacement. 
The pattern can be a string or a RegExp, 
and the replacement can be a string or 
a function to be called for each match.
 If pattern is a string, 
 only the first occurrence will be replaced. */

 function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";//since it is a string replace method will 
                                //replace only the first occurence
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    } //by looping through it will replace x with the numbers
    
    return format;
  }