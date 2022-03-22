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
    }





let heap1 = new MinHeap();
heap1.insert(23)
heap1.insert(35)
heap1.insert(60)
heap1.insert(12)
console.log(heap1)