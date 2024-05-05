class Node{
    constructor(value){
        this.value=value;
        this.right=null;
        this.left=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }

    insert(value){
        var newNode=new Node(value);
        if(!this.root){
            this.root=newNode;
            return this;
        }else{
            var current=this.root;
            while(true){
                if(value<current.value){
                    if(current.left === null){
                        current.left=newNode;
                        return this;
                    }else{
                        current=current.left; //왼쪽에 있을경우 다음 노드가 current가 되도록 하는 작업
                    }
                }else if(value>current.value){
                    if(current.right===null){
                        current.right=newNode;
                        return this;
                    }else{
                        current=current.right;
                    }
                }else if(value === current.value){
                    return false;
                }
            }
        }
    }

    find(value){
        if(this.root === null){
            return false;
        }
        var current=this.root,found=false;

        while(current&&!found){
            if(value<current.value){
                current=current.left;
            }
            else if(value>current.value){
                 current=current.right;   
            }
            else{
                found=true;
            }
        }
        if(!found) return false;
        return current;
    }
}

var tree=new BinarySearchTree();

tree.insert(10);
tree.insert(20);
tree.insert(9);
tree.insert(30);
tree.insert(25);

console.log(tree);
console.log(tree.root.right)
console.log(tree.root.left)