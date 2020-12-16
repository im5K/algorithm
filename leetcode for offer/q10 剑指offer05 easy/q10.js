/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let newS = new String()
    for(let i=0;i<s.length;i++){
        if(s[i]==" "){
           newS+="%20"
    }else newS+=s[i]
   
}

return newS
}



s="we are happy！"

