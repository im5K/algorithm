 //左边为实例，右边为构造函数
 //检测
 
 Myinstanceof = (left,right)=>{
    
    if(left==null) return false
    
    if(typeof left!=='object'&&typeof left!=='function')return false
    let proto = Object.getPrototypeOf(left)

    // while(true){
    //     if(proto==null)return false
    //     else if(proto==right.prototype)return true
    //     proto = proto.__proto__
    // }
    
    while(true){
        if(proto==null)return false
        else if(proto==right.prototype)return true
        proto = Object.getPrototypeOf(proto)
    }
}

function Supertype(){
// this.age = age
// this.name = name

}
Supertype.prototype.name = 23
Supertype.prototype.age = 33
function Subtype(){
    this.bool = false;

}
let Sub = new Subtype(); 
Subtype.prototype = new Supertype()

function Ssub(){
    this.male = 'men'
 }
 Ssub.prototype = new Subtype()
 Ssub.prototype.constructor = Ssub
let ssss= new Ssub()
let per = new Subtype()

console.log(ssss.male)
 console.log(Myinstanceof(per,Supertype), ssss instanceof Ssub)