/* You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases. */

//past solution
    //I think this was where I was learning about that string can not be mutated but by creating and adding strings to each other you can create new string
    // plus the basic usage of the switch cases
function likes(names) {
    let returnStr=''
    let twomore=0
    if(names.length===0){
      return "no one likes this"
    }
    twomore=names.length-2 //this could have gone to line 17 idk why I made another re assignments back then
    switch(names.length){
         case 1:
          returnStr+=names[0]
          return returnStr+' likes this'
        case 2:
          returnStr+=names[0]+' and '+names[1]
          break
        case 3:
          returnStr+=names[0]+', '+names[1]+' and '+names[2]
          break
        default:
          returnStr+=names[0]+', '+names[1]+' and '+twomore+' others'
     }
    
    return returnStr+' like this'
    
  }


  //recent solution
  function likes(names) {
    let extraPersonCount=names.length-2
      switch (names.length){
        case 0:
          return "no one likes this"
        case 1:
          return `${names[0]} likes this`
        case 2:
          return `${names[0]} and ${names[1]} like this`
        case 3:
          return `${names[0]}, ${names[1]} and ${names[2]} like this`
        default: 
          return `${names[0]}, ${names[1]} and ${extraPersonCount} others like this`
      }
    }