// Function.prototype.call = function(context = globalThis,...args){
//     if(typeof this!='function'){
//         throw new TypeError("Type Error")

//     }
//     const fn = Symbol('fn');
//     context[fn] = this;
//    // console.log(context[fn])
//     const res = this[fn](...args);
//     delete this.fn;
//     return res;
// }

good={
 a:2,
 b:6,
 c:23
}

Function.prototype.call = function(context = global, ...args) {
    if (typeof this !== 'function') {
      throw new TypeError('Type Error');
    }
    const fn = Symbol('fn');
    context[fn] = this;
  
    const res = context[fn](...args);
    delete context.fn;
    return res;
  }

  Function.prototype.apply = function(context=window,args){
      if(typeof this!='function'){
          throw new TypeError("Type Error")
      }
      const fn = Symbol('fn')
      context[fn] = this
      const re  = context[fn](...args)
      delete context[fn]
      return re

  }
//   Function.prototype.bind = function(context,...args){

//       const self = this
//       return function(){
//         self.apply(context,[...args])
//       }

//   }
  Function.prototype.bind = function(){
      const context = [].shift.call(arguments)
      const args  = [].slice.call(arguments)
      const self = this
      
      return function(){
       
        return self.call(context,...args)
        
      }

  }
function test(name,age){
   
    console.log('name',name,'age',age)
    console.log(this.b)

}
// var a = 3
//test.apply(good,[233,222222])

fn = test.bind(good,222,333)()
