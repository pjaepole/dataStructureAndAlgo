/* Write a function that takes in a string of one or more words, 
and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata).
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
        spinWords( "This is a test") => returns "This is a test" 
        spinWords( "This is another test" )=> returns "This is rehtona test" */

function spinWords(string) {
  const copy = string.split(" "); //I believe I can use const for array since elements inside of array change but array itself doesn't change
  //so copy is now an array with each element with words seperated by ' ' space
  for (let i = 0; i < copy.length; i++) {//loops through the array
    if (copy[i].length >= 5) {//if word is length is equal or more than 5, run this if function
      let currWord = copy[i].split("").reverse().join(""); //breaks down the word to the letter inside an array and reverse that array, then join to form a reversed word
        copy[i] = currWord; //then replace copy[i] original with reversed word 
    }
  }
  return copy.join(" "); //finally joins the words
}
