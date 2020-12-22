class Node{
    constructor(freq, char, right, left, next){
        this.freq = freq;
        this.char = char;
        this.right = right;
        this.left = left;
        this.next = next;
    }
    
}

class linkedList{

    constructor(head){
        this.head = head;
    }

    insert(Node){
        if(Node.freq < this.head.freq){
            Node.next = this.head;
        }
        else{
            currNode = this.head;
            while(currNode.next != null){
                if(Node.freq < currNode.next){
                    hold = currNode.next;
                    currNode.next = Node;
                    Node.next = hold;
                    return
                }
            }
            currNode.next = Node
        }
    }

    getLength(){
        if(this.head == null){
            return 0;
        }
        if(this.head.next = null){
            return 1;
        }
        currNode = this.head
        count = 1
        while(currNode.next != null){
            currNode = currNode.next;
            count = count + 1;

        }

        return(count);
    }

    createHuffman(){
        currNode = this.head;
        while(currNode.next != null)
        right = currNode;
        left = currNode.next    
        this.head = currNode.next;
        newNode = new Node(right.freq + left.freq, right, left, null);
        this.insert(newNode);

    }
}