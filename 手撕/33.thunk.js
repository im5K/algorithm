function thunk(fun){
    return function(){
        _arg = Array.prototype.slice.call(arguments)
        return function(callback){
            _arg.push(callback)
            fun.apply(this,_arg)
        }
    }
}




fun  = function(a,b,sum){
    sum(a+b)
}
sum = function(as){
    console.log(as)
}
test = thunk(fun)
test(1,2)(sum)




function run(fn) {
    var gen = fn();
  
    function next(err, data) {
      var result = gen.next(data);
      if (result.done) return;
      result.value(next);
    }
  
    next();
  }
  
  function* g() {
    // ...
  }
  
  run(g);