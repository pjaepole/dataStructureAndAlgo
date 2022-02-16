/* Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100 */

function validParentheses(parens){
  if(parens.length%2!==0){
    return false
  }
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }

  //so this problem was about if parens have right parentheses pair which means there are no open parentheses left
  //my first apporach was to inplace first filter right off the bat to see if parens.length is even number, since odd number means
  //that at least one of the parens doesn't have a closing pair for them
  //then next step is to create a n counter variable to keep track of if open parantheses have closing pair 
