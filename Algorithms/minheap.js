class MinHeap{
    constructor(){
        this.heap = [null]
    }

    insert(value){
        this.heap.push(value)
        let current = this.heap.length - 1
        let parent = Math.floor(current/2)
        while(this.heap[current] < this.heap[parent]){
            [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]]
            current = parent
            parent = Math.floor(current/2)
        }
        return this.heap
        }
    

    remove(){
        //swap the value at root of the tree with the last element
        [this.heap[1], this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1], this.heap[1]];
        //remove from the end of our array, set a variable to equal to the popped value             
        let output = this.heap.pop()
        // from the root, determine if the parent is less than the children, if they are not, swap with the smaller child
        let curr =1 
        let leftChild = curr*2
        let rightChild = curr*2+1
        // hint: to calculate the left child (parent index *2) and right child (parent index *2 +1)
        while (this.heap[curr]>this.heap[rightChild] || this.heap[curr]>this.heap[leftChild]){
                //if the value of the left child is smaller than the value of the right child , then swap the parent with the left child 
            if(this.heap[leftChild]<this.heap[rightChild]){
                [this.heap[curr],this.heap[leftChild]] = [this.heap[leftChild], this.heap[curr]];
                curr = leftChild
            }else{
                [this.heap[curr],this.heap[rightChild]] = [this.heap[rightChild], this.heap[curr]];
                curr = rightChild
        } 
            leftChild = curr*2
            rightChild = curr*2+1  
        }
        return output
    }
}




let heap1 = new MinHeap();
heap1.insert(23)
heap1.insert(35)
heap1.insert(60)
heap1.insert(12)
heap1.insert(78)
heap1.insert(99)
heap1.remove()
console.log(heap1)