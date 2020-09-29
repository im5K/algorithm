function Node(value,left=null,right=null){
    this.left = left;
    this.right = right;
    this.value = value;
}
f4=new Node(4);
f5=new Node(5);
f6=new Node(6);
f7=new Node(7);

f3 = new Node(3,f6,f7)
f2 = new Node(2,f4,f5)
f1 = new Node(1,f2,f3,)


function Middlesort(Node){
    let arr=[] 
    let p = Node
    while(arr.length!==0||p){
        while(p){
            arr.push(p)
            p = p.left
            
        }


        p = arr.pop()
        console.log(p.value)

            p = p.right
        
        

    }
}

function Frontsort(Node){
    let arr=[] 
    let p = Node
    while(arr.length!==0||p){
        while(p){
            arr.push(p)
            console.log(p.value)         
            p = p.left
            }
    p = arr.pop();
    p = p.right  
}
}


function Backsort(Node){
    let arr=[] 
    let p = Node
    while(arr.length!==0||p){
        while(p){
            arr.push(p)       
            p = p.left
            }
    p = arr.pop();
    console.log(p.value)   
    p = p.right
        }
}


Backsort(f1)
