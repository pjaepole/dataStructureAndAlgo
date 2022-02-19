/* It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from  to . Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

Example


If person  bribes person , the queue will look like this: . Only  bribe is required. Print 1.


Person  had to bribe  people to get to the current position. Print Too chaotic.

Function Description

Complete the function minimumBribes in the editor below.

minimumBribes has the following parameter(s):

int q[n]: the positions of the people after all bribes
Returns

No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than  people.
Input Format

The first line contains an integer , the number of test cases.

Each of the next  pairs of lines are as follows:
- The first line contains an integer , the number of people in the queue
- The second line has  space-separated integers describing the final state of the queue.

Constraints

Subtasks

For  score 
For  score 

Sample Input

STDIN       Function
-----       --------
2           t = 2
5           n = 5
2 1 5 3 4   q = [2, 1, 5, 3, 4]
5           n = 5
2 5 1 3 4   q = [2, 5, 1, 3, 4]
Sample Output

3
Too chaotic
Explanation

Test Case 1

The initial state:

pic1(1).png

After person  moves one position ahead by bribing person :

pic2.png

Now person  moves another position ahead by bribing person :

pic3.png

And person  moves one position ahead by bribing person :

pic5.png

So the final state is  after three bribing operations.

Test Case 2

No person can bribe more than two people, yet it appears person  has done so. It is not possible to achieve the input state. */

//my solution , for somereason it gave me no response error in hackerrank's own terminal
//but other js online terminal did show test result passing with this
function minimumBribes(q) {
    let tracker={} // this will trak each element's place in line and value itself so two key value pair 
    let counter=0 //this keeps track of how many times in the q person was bribed
    for(let i=0 ;i<q.length; i++){
        if(!tracker[q[i]]){
            tracker[q[i]]={placeInLine:i+1, val:q[i]}
        }
    } //loops through the array and creates an object with 2 key placeinline (unlike the index, I made it into starts from 1) and val 
    for(let w in tracker){
         if(tracker[w].placeInLine-tracker[w].val<-1){ //this checks if a person bribed more than 2 times if person bribed once it will return 0
            return "Too chaotic" //if person bribed twice it will return -1 , if more than 2 times it will return value smaller than -1 so Too chaotic
        }                           //and it will end the function 
       if(tracker[w].placeInLine-tracker[w].val==1){
           counter+=1 //this keeps track of how many bribes happend
       } 
    }
    return counter //if it wasn't chaotic returns the number of bribes happend in the que
 }