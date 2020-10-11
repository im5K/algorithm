function Parent(name){
this.name = name
}
Parent.prototype.name = 'tzhao'

function Son(name,age){
    Parent.call(this,name)
    this.age = age
}

Son.prototype = new Parent();
Son.prototype.constructor = Son
son1 = Object.create(Son.prototype)
let s
console.log(s = Son.prototype.constructor,son1.name)
