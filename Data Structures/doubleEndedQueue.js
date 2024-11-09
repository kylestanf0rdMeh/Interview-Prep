/**
 * @operations
 * 1. insertFront
 * 2. insertRear
 * 3. deleteFront
 * 4. deleteRear
 * 
 * @extra_operations
 * 1. getFront
 * 2. getRear
 * 3. isEmpty
 * 4. isFull
 * 
 * @meanings
 * in this case, rear is index 0, front is last index
 * 
 * @more
 * need to keep track of 2 indeices, front and rear
 * enqueue(push) item at the rear or front of the dequeue and dequeue(pop) an item from both the rear and front end
 * 
 * @insert_at_rear
 * front = -1, rear = 0
 * a) check if dequeue is full or not
 * if rear==size-1 then reinit rear to 0, else increment rear by 1 and push current key into arr[rear]=key
 * 
 * @insert_at_front
 * a)check if full or not
 * b) if front==0 || init position, move front to point to last index of array
 * front = size - 1
 * else decrement front by 1 and push current kley into arr[front]=key
 * rear reamin same
 * 
 * @WHY
 * This is a generalized version of a queue, which allows us to insert at both the front and rear ends
 * @SUPPORTS
 * stack and queue operations
 * @WHEN
 * For example see the Maximum of all subarrays of size k problem., 
 * 0-1 BFS, 
 * and Find the first circular tour that visits all petrol pumps. 
 * See the wiki page for another example of the A-Steal job scheduling algorithm where Deque is used as deletions operation is required at both ends. 
*/



let MAX = 100;
class Deque{
    constructor(size){
        this. arr = new Array(MAX)
        this.front = -1;
        this.rear = 0
        this.size = size;
    }

    isFull(){
        return((this.front == 0 && this.rear == this.size-1) || this.front == this.rear+1);
    }

    isEmpty(){
        return (this.front == -1);
    }

    insertFront(key){
        // check if full
        if(this.isFull()){
            document.write("Overflow ")
            return;
        }

        // If queue is intially empty
        if(this.front == -1){
            this.front = 0;
            this.rear = 0;
        }else if(this.front == 0){
            this.front = this.size - 1;
        }else{
            this.front = this.front - 1;
        }
        this.arr[this.front] = key;
    }

    insertRear(key){
        if(this.isFull()){
            document.write('Overflow ')
            return;
        }

        // if initially empty
        if(this.front == -1){
            this.front = 0;
            this.rear = 0;
        // rear is last position of queue
        }else if(this.rear == this.size-1){
            this.rear = 0;
        // increment rear end by 1
        }else{
            this.rear = this.rear + 1;
        }

        // insert current element into deque
        this.arr[this.rear] = key;
    }

    // deletes element at front end of queue
    deleteFront(){
        if(this.isEmpty()){
            document.write('Queue underflow')
            return;
        }

        // deque only has one element
        if(this.front == this.rear){
            this.front = -1;
            this.rear = -1;
        }else{
            // back to initial position
            if(this.front == this.size - 1){
                this.front = 0
            }else{
                this.front = this.front+1;
            }
        }
    }

    deleteRear(){
        if(this.isEmpty()){
            document.write('Underflow')
            return;
        }

        // deque only has one element
        if(this.front == this.rear){
            this.front = -1;
            this.rear = -1;
        }else if(this.rear == 0){
            this.rear = this.size - 1;
        }else{
            this.rear = this.rear-1;
        }
    }

    getFront(){
        if(this.isEmpty()){
            document.write('Underflow')
            return -1;
        }
        return this.arr[this.front]
    }

    getRear(){
        if(this.isEmpty()){
            document.write('Underflow')
            return -1;
        }
        return this.arr[this.rear];
    }
}



// Driver program to test above function
let dq = new Deque(5);
           
console.log("Insert element at rear end  : 5 ");
dq.insertRear(5);
 
console.log("insert element at rear end : 10 ");
dq.insertRear(10);
 
console.log("get rear element : "+ dq.getRear()+"");
 
dq.deleteRear();
console.log("After delete rear element new rear become : " +
                   dq.getRear()+"");
 
console.log("inserting element at front end");
dq.insertFront(15);

console.log("get front element: " +dq.getFront()+"");
 
dq.deleteFront();
 
console.log("After delete front element new front become : " +
                   +  dq.getFront()+"");