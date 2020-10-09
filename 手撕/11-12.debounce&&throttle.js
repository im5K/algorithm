//防抖和节流


const debounce = function(func,time){
    let timeout = null
    return function(){
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            func.apply(this,arguments)
        },time)
    }

}

debounce()