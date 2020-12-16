const arr = [1, [2, [3, [4, 5]]], 6];
//方法一，flat 无限层深度
re1 = arr.flat(Infinity)
// 方法二 考虑正则化
re2 = JSON.parse('['+JSON.stringify(arr).replace(/\[|\]/g,'')+']') 

console.log(re1,re2)
