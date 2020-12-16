/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    //思路按位相加，保留进位
        var arr1 = Array.from(num1)
        var arr2 = Array.from(num2)
        var s  = ""
         var flag  =0
        while((arr1.length+arr2.length)||(flag==1)){
            let n1 =JSON.parse(arr1.pop()||"0") 
            let n2 = JSON.parse(arr2.pop()||"0")
            console.log(n1,n2)
             let sum = (n1+n2+flag)%10
            if(n1+n2>10){
                flag = 1
            }else flag = 0
            s = JSON.stringify(sum)+s
    
            
    
        }
        return s
    };
    addStrings("0","0")