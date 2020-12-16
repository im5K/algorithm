/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 
var movingCount = function(m, n, k) {
    //各位数字之和
    
    getNum = function(num){
        let sum = 0
        while(num){
           it = num%10
           sum += it
           num = (num-it)/10
        }
        return  sum
    }
    let list = new Array()
    for(let i=0;i<m;i++){
        list[i] = new Array()
        for(let j=0;j<n;j++){
            list[i][j] = 0
            
        }
    }
    list[0][0] = 1
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
           
            if((getNum(i)+getNum(j)<=k)&&((i==0?0:list[i-1][j]==1)||list[i+1][j]==1||(j==0?0:list[i][j-1]==1)||list[i][j+1]==1)){
              
                list[i][j]=1
            }else if(i==0&j==0){
                list[i][j] = 1
            }else list[i][j] = 0
            
        }
    }
     sum = list.flat(Infinity).reduce((cur,item)=>cur+=item,0)
     for(let i=0;i<m;i++){
       let  str = ''
        for(let j=0;j<n;j++){
          str = str+list[i][j]+' '
            
        }
        console.log(str)
        
    }
     return sum
    
    };
    
    
ans  = movingCount(1,2,1)