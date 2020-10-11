//每次执行都返回一个函数
function add() {
    const _args = [...arguments];
    function fn() {
      _args.push(...arguments);
      console.log(_args) 
      return fn;
    }
    fn.toString = function() {
      return _args.reduce((sum, cur) => sum + cur);
    }
    return fn;
  }

  test = function(){
    console.log('aaaaa') 
  }

  test.toString = function(){
    return 123
  }

  console.log(test)

//good = add(1,2,3,4)
//console.log(-2>>>0)