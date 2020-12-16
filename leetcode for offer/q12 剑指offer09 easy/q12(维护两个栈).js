var CQueue = function() {
    this.stack1=[]
    this.stack2=[]
    
    };
    
    /** 
     * @param {number} value
     * @return {void}
     */
    CQueue.prototype.appendTail = function(value) {
   
    this.stack1.push(value)
    
   
    };
    
    /**
     * @return {number}
     */
    CQueue.prototype.deleteHead = function() {
        let value
        if((this.stack1.length+this.stack2.length)==0){
            return -1
        }
        
       if(this.stack2.length!=0)return this.stack2.pop()
       while(this.stack1.length!=0){
           value = this.stack1.pop()
           this.stack2.push(value)
       }
       return this.stack2.pop()
       
    };
    