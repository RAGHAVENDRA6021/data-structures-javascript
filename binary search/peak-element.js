/*

Problem Description
Given an array of integers A, find and return the peak element in it.
An array element is considered a peak if it is not smaller than its neighbors. For corner elements, we need to consider only one neighbor.

NOTE:

It is guaranteed that the array contains only a single peak element.
Users are expected to solve this in O(log(N)) time. The array may contain duplicate elements.


Problem Constraints
1 <= |A| <= 100000

1 <= A[i] <= 109



Input Format
The only argument given is the integer array A.



Output Format
Return the peak element.

Example Input
Input 1:

A = [1, 2, 3, 4, 5]
Input 2:

A = [5, 17, 100, 11]


Example Output
Output 1:

 5
Output 2:

 100

*/


module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
           const n = A.length;
           if(n===1) return A[0];
           if(A[0]>A[1]) return A[0];
           if(A[n-1]>A[n-2]) return A[n-1]
           let lo =0 ,hi = n-1;
           while (lo <= hi) {
         mid = (lo + hi) >> 1;
         if (
           mid >= 0 &&
           A[mid] >= A[mid - 1] &&
           mid + 1 < A.length &&
           A[mid] >= A[mid + 1]
         )
           return A[mid];
         else if (mid >= 0 && A[mid - 1] <= A[mid]) lo = mid + 1;
         else hi = mid - 1;
       }
       if (A[A.length - 1] >= A[A.length - 2]) return A[A.length - 1];
       return A[0];
   
           }
       
   
   };