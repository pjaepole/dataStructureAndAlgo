/* Given two strings, determine if they share a common substring. A substring may be as small as one character.

Example


These share the common substring .



These do not share a substring.

Function Description

Complete the function twoStrings in the editor below.

twoStrings has the following parameter(s):

string s1: a string
string s2: another string
Returns

string: either YES or NO
Input Format

The first line contains a single integer , the number of test cases.

The following  pairs of lines are as follows:

The first line contains string .
The second line contains string .
Constraints

 and  consist of characters in the range ascii[a-z].
Output Format

For each pair of strings, return YES or NO.

Sample Input

2
hello
world
hi
world
Sample Output

YES
NO */


function twoStrings(s1, s2) {
    // Write your code here
    let obj={}
    for(let i=0;i<s1.length;i++){
        if(!obj[s1[i]]){
            obj[s1[i]]=1
        } 
    }
    for(let i=0;i<s2.length;i++){
        if(obj[s2[i]]){
            obj[s2[i]]+=1
        } 
    }
    for(let substr in obj){
        if(obj[substr]>1){
            return "YES"
        }
    }
    return "NO"
}