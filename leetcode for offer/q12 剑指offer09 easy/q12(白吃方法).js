var CQueue = function() {
    this.push = Array.prototype.push
    this.pop = Array.prototype.pop
    };
    
    /** 
     * @param {number} value
     * @return {void}
     */
    CQueue.prototype.appendTail = function(value) {
    this.push(value)
    };
    
    /**
     * @return {number}
     */
    CQueue.prototype.deleteHead = function() {
        let len = this.length
        if(len==0)return -1
        let value
        obj = new CQueue();
         for(let i=0;i<len;i++){
             value = this.pop()
             obj.push(value)
    
         }
         re = obj.pop()
         for(let i=0;i<len-1;i++){
             value = obj.pop()
             this.push(value)
    
         }
         return value
         
    };
    