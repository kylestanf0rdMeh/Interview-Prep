class NewArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length- 1]
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index]
        // best practice to split into seperate function
        this.shiftItems(index)
        return item;
    }

    shiftItems(index){
        // only items behind index need to be shifted
        for(let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i+1]
        }

        // last element will have copy, we remove the element from the
        // last index before decreasing size of array
        delete this.data[this.length-1]
        this.length--;
    }
}


const newArray = new NewArray();
console.log(newArray)

newArray.push('yooooo')
newArray.push('lil uzi')
newArray.push('hi')

newArray.delete(2)

console.log(newArray)
