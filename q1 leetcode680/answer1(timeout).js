/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {

        
      const rotate = s => {
        let v=''
        for(let i = 0;i<s.length;i++){
            
            v = v.concat( s[s.length-1-i])
        }

        return v
    }
    if(s===rotate(s))return true
    
    for(let i=0;i<s.length;i++){
        let subs = s.substr(0,i)+s.substr(i+1,s.length)
       if(rotate(subs)===subs)return true

        
    }

    return false
};



let s = 'abadf'
console.log(validPalindrome(s))
