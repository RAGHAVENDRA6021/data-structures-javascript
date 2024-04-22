/* Rotated Sorted Array Search */

module.exports = { 
    //param A : array of integers
    //param B : integer
    //return an integer
       search : function(A, B){
           const n = A.length;
           let low = 0, high = n-1,mid;
           while(low<=high){
               mid = (low+high)>>1;
               if(A[mid]==B){
                   return mid;
               }
               if(A[mid]<=A[high] &&( B>=A[mid] && B<=A[high])){
                   low = mid+1;
               }
               else if(A[mid]<=A[high] && !(B>=A[mid] && B<=A[high])){
                   high = mid-1;
               }
               else if(A[low]<=A[mid] &&( B>=A[low] && B<=A[mid])){
                   high = mid -1;
               }
               else{
                   low = mid + 1;
               }
   
           }
           return -1;
   
       }
   };
   