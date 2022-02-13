/* A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become . Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

Function Description

Complete the function rotLeft in the editor below.

rotLeft has the following parameter(s):

int a[n]: the array to rotate
int d: the number of rotations
Returns

int a'[n]: the rotated array
Input Format

The first line contains two space-separated integers  and , the size of  and the number of left rotations.
The second line contains  space-separated integers, each an .

Constraints

Sample Input

5 4
1 2 3 4 5
Sample Output

5 1 2 3 4
Explanation

When we perform  left rotations, the array undergoes the following sequence of changes:
https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 */

function rotLeft(a, d) {
    while(d>0){
        a.push(a[0])
        a.splice(0,1)
        d--
    }
    return a
}
// my thought process was that since we are only making changes to the beginning of the array(a[0]) we just need to push a[0] to the end of the array
// and by using the splice(0,1) which will remove one element from starting at array index 0 and array will be left with mutated state
// and using the while loop to keep a tab on the d which is the left rotation count it will perform a.push a.splice which does the left rotation.