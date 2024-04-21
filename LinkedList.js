class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class SingledLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(val){
        var newNode=new Node(val);

        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        var current=this.head;
        var afterTail=this.tail;

        if(!this.head) return undefined;

        while(current.next){
            afterTail=current;
            current=current.next;
        }
        this.tail=afterTail;
        this.tail.next=null;
        this.length--;
        if(this.length === 0){
            this.head=null;
            this.tail=null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        
        var currentHead=this.head;
        this.head=currentHead.next;
        this.length--;
        if(this.length === 0){
            this.head=null;
            this.tail=null;
        }

        return currentHead;
    }

    unshift(val){
        var newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }
        else{
            newNode.next=this.head;
            this.head=newNode;
        }
        this.length++;
        return this;
    }
    
    get(index){
        if(index<0 || index>=this.length) return null;
        var cnt=0;
        var current = this.head;
        while(cnt != index){
            current=current.next;
            cnt++;
        }
        return current;

    }
}

var linked=new SingledLinkedList();

linked.push('hi');
linked.push('han');

console.log(linked);

// linked.pop()
// console.log(linked);

linked.shift();
console.log(linked)
linked.unshift("this is unshift");
linked.unshift("hello this");
console.log(linked);
console.log(linked.get(1));