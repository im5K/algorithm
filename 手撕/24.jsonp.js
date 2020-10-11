jsonp = function(url,params,callbackname){
    const generalurl = ()=>{
        datasrc = ''
        datasrc += `${url}?` 
        for(let k in params){
            datasrc += `${k}=${params[k]}&`
        }
        datasrc += `cb=${callbackname}` 
        return datasrc
    }

    return new Promise((reslove,reject)=>{
        const scriptEle = document.createElement('script')
        scriptEle.src = generalurl()
        document.body.appendChild(scriptEle)
        window[callbackname] = data =>{
            reslove(data)
            document.removeChild(scriptEle)
        }
       

    })
}




jsonp = function(url,params,callbackname){
    generalurl = ()=>{
        let datasrc = ''
        datasrc += `${url}?`
        for(let k in params){
            datasrc += `${k}=${params[k]}&`
        }
        datasrc += `cb=${callbackname}`
        return datasrc
    }

    return Promise((reslove,reject)=>{
        scriptEle = document.createElement('script')
        scriptEle.src = generalurl()
        document.body.appendChild(scriptEle)
        window[callbackname]= data =>{
            reslove(data)
            document.removeChild(scriptEle)
        }
    })

}