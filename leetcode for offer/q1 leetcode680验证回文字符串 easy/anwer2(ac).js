/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s,flag=false) {
        
    
    for(let i = 0;i<s.length;i++ ){
         let j = s.length-1-i
        
        if(j<=i){
            return true
        }else if(s[i]!==s[j]&&flag==false){

            console.log(i,j,s.substring(i+1,j+1),s.substring(i,j))
             return validPalindrome(s.substring(i+1,j+1),true)||validPalindrome(s.substring(i,j),true)
        }else if(s[i]!==s[j]&&flag!==false)return false
            
    }

    return true
        
    
  
    
};



// var validPalindrome = function(s, flag = true) {
//     let l = 0, r = s.length - 1;
//     while (l < r && s[l] === s[r]) l++, r--;
//     if (r <= l) return true;
//     if (flag == true) return validPalindrome(s.slice(l, r), false) || validPalindrome(s.slice(l + 1, r + 1), false)
//     return false;
// };


let s = 'abc'
console.log(validPalindrome(s,false))

/**
 * @param {string} s
 * @return {boolean}
 */