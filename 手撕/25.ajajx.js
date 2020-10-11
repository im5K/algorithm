const getJson = function(url){
    return new Promise((resolve,reject)=>{
        // const xhr = XMLHttpRequest? new XMLHttpRequest():new ActiveXObject('Mscrosoft.XMLHttp')
        const xhr = new XMLHttpRequest()
        xhr.open('GET',url,false)
        xhr.setRequestHeader('Accept','application/json')
        xhr.onreadystatechange=function(){
            if(xhr.readyState!=4)return;
            if(xhr.status==200||xhr.status==304){
                resolve(xhr.responseText)
            }else{
                reject(new Error(xhr.responseText))
            }

        }
    })
}

getJson('http://localhost:5000/manage/role/list').then(data=>{console.log(data)})