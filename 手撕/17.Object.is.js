//Object.is比较是否为同一个值
//NaN！==NaN
// -0===+0
const is = (value1,value2)=>{
    if(value2===value1){
        return value1!==0||value2!==0||1/value2===1/value1
    }
    else return value2!==value2&&value1!==value1
}
console.log(1/-0==1/0)
 console.log(is(0,0),Object.is(0,0)) 