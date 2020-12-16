/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var myPow = function(x, n) {
    if(n==0)return 1
    if(x==0)return 0
    if(n<0)return myPow(1/x,-n)
    if(n%2==0){
         {
             let val =  myPow(x,n/2)
            return val*val
            }
        }else{
            let val =  myPow(x,(n-1)/2)
            return val*val*x

        } 

};