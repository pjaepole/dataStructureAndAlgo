/* You are given an array (which will have a length of at least 3, 
    but could be very large) containing integers. 
    The array is either entirely comprised of odd integers or
     entirely comprised of even integers except for a single integer N. 
     Write a method that takes the array as an argument 
     and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number) */

function findOutlier(integers){
    let oddd=0
    let evenn=0
    for(let i=0;i<3;i++){ //first determine if the array is even or odd
      if(integers[i]%2===0){ //it was mentioned that array can be very long
        evenn++ //so i think one of the method to find would be just to look 
      } else if(integers[i]%2!==0){//at first 3 element and determine even or odd
        oddd++
      }
    }
    let isEven= evenn>oddd?true:false // so depending on even odd state of array
    if(isEven){ //if even loop through the array and find first odd and return
      for(let i=0;i<integers.length;i++){
        if(integers[i]%2!==0){
          return integers[i]
        }
      }
    } else if(!isEven){ // else if odd loop through and find first even and return
      for(let i=0;i<integers.length;i++){
        if(integers[i]%2===0){
          return integers[i]
        }
      }
    }
  }

 //this was someone else's solution
  function findOutlier(int){ 
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
  }

  //now i think about it, when dealing with array problem I should look into
  //using array method like filter....
  //so this solution filters int for even odd and depending on the length
  //of even or odd variable returns the first element of the array.