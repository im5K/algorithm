
const PENDING = 'PENDING'
const FULFUILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class MyPromise{
    constructor(exector){
        this.status = PENDING
        this.value = undefined
        this.reason = undefined
        
        const resolve = value =>{
            if(this.status==PENDING){
                this.status = FULFUILLED
                this.value = value
            }
        }

        const reject = reason =>{
            if(this.status == PENDING){
                this.status =  REJECTED
                this.reason = reason
            }
        }

        try{
            exector(resolve,reject)
        }catch(e){
            reject(e)
        }
    }
   

    then = (onFulfilled,onReject)=>{
        if(this.status==FULFUILLED){
            onFulfilled(this.value)
        }else if(this.status == REJECTED)
        {
            onReject(this.reason)
        }         
    }
    
}

let pro1= new Promise((resolve,reject)=>{
   
    resolve('good day1')
})
let pro2 = new Promise((resolve,reject)=>{
    
    resolve('good day2')
})
let pro3 = new Promise((resolve,reject)=>{
    
    resolve('good day3')
})
v2 = value=>{
    console.log(value)
}

pro1.then(v2).then(v2)

// Promise.all([pro1,pro2,pro3]).then(v2)

// Promise.Myall = function(promises){
//     return new Promise((resolve,reject)=>{
//         ans = []
//         const len = promises.length
//         let index = 0
//         for(let key in promises ){
//             Promise.resolve(promises[key]).then(data=>{
//                 ans[index]=data;
//                 index++
//                 if(index == len)resolve(ans)
//             }).catch(err=>reject(err))
//         }
//     })
// }

// Promise.Myrace = function(promises){
//     return new Promise((resolve,reject)=>{
//         promises.forEach(promise => {
//             Promise.resolve(promise).then(data=>{
//                 resolve(data),err=>{
//                     reject(err)
//                 }
//             })
            
//         });
//     })
// }
// Promise.Myall([pro1,pro2,pro3]).then(v2)
// Promise.Myrace([pro1,pro2,pro3]).then(v2)