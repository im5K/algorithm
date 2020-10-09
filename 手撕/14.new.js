//1.用户首先创建一个空的对象，将this指向这个空的对象
//2.然后执行构造函数
//3.如果构造函数有引用类型的返回值，则按这个返回值来，否则返回一个实例

//
function newobj(ctor,...args){
    if(typeof ctor!=='function'){
        throw new TypeError(ctor+" is not a function")
    }
    const obj = Object.create(ctor.prototype)
    const re = ctor.apply(obj,args)
//    if(re instanceof Object) return re    //用 instanceof 引用对象
//    else  return obj
isObject = typeof re === 'object' && re!==null
isFunction = typeof re === 'function'
       return isObject||isFunction?re:obj

}

function Person(age,name){
    this.age = age;
    this.name = name;
    // return {age:2,name:4}               //返回对象
    // return function(){                  //返回函数
    
    //     return 3                        //非引用对象
    // }
    // return null
    return 3
   
}

per1 = newobj(Person,23,'adf')
per2 = new Person(23,'adf')
console.log(per1,per2)

console.log( typeof null )