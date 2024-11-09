class LinkedList{
    constructor(head = null){
        this.head = head
        this.size = 0;
    }

    add(item){
        const newNode = new Node(item)
        let current;

        // If we have not added anything in yet
        if(this.head ==null){
            this.head = newNode;
        }else{
            current = this.head;

            // Iterate to end
            while(current.next){
                current = current.next
            }

            // Add item to end of list
            current.next = node;
        }

        this.size++;
    }

    insertAt(data, index){
        if(index < 0 || index > this.size){
            return console.log('you fucked up fam, index broke')
        }else{
            let node = new Node(data)
            let curr, prev;

            // add data to first index
            if(index == 0){
                node.next = this.head;
                this.head = node;
            }else{
                curr = this.head;
                let iterator = 0;

                // iterate over list to find position to insert at
                while(iterator < index){
                    iterator++;
                    prev = curr;
                    curr = curr.next
                }

                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    removeFrom(index){
        if(index < 0 || index >= this.size){
            return console.log('invalid index')
        }else{
            let curr, prev, iterator = 0;
            curr = this.head
            prev= curr;

            if(index === 0){
                this.head = curr.next
            }else{
                while(iterator < index){
                    iterator++;
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next;
            }
            this.size--;
            return curr.data
        }
    }

    removeData(data){
        let current = this.head
        let prev = null;

        while(current != null){
            if(current.data === data){
                if(prev == null){
                    this.head = current.next
                }else{
                    prev.next = current.next
                }

                this.size--;
                return current.data
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    
}


class Node{
    constructor(data){
        this.data = data
        this.next = null;
    }
}


