/* Problem Description
Given a sorted array of integers A where every element appears twice except for one element which appears once, find and return this single element that appears only once.

Elements which are appearing twice are adjacent to each other.

NOTE: Users are expected to solve this in O(log(N)) time.


 */

module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
           let n = A.length;
           let start = 0 , end = n-1,mid;
           if(n==1) return A[0];
   
           while(start<end){
               
               mid=(start+end)>>1;
              // console.log(start,end,mid)
               if(mid-1>=0 && mid+1<n && A[mid]!==A[mid-1] && A[mid]!==A[mid+1]) return A[mid]
               if(mid%2){
                   //odd
                   //whether previous is same or not we should check, then
                   if((mid-1>=0 && A[mid]===A[mid-1])){
                       start=mid+1;
                   }
                   else{
                       end = mid -1;
                   }
               }
               else{
                   //even
                   if((mid+1<n &&  A[mid]!==A[mid+1])){
                       end=mid-1;
                   }
                   else{
                       start = mid +1;
                   }
               }
           }
           return A[start];
       }
   };
   