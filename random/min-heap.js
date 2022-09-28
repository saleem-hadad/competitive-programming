class MinHeap {
    constructor() {
        this.heap = [null];
    }

    insert(value) {
        this.heap.push(value);
        if(this.heap.length > 2) {
            let index = this.heap.length - 1;
            while(this.heap[index] < this.heap[Math.floor(index / 2)]) {
                [this.heap[index], this.heap[Math.floor(index / 2)]] = [this.heap[Math.floor(index / 2)], this.heap[index]]
                if(Math.floor(index / 2) > 1) {
                    index = Math.floor(index / 2)
                }else {
                    break;
                }

            }
        }

        return this;
    }

    print() {
        console.log(this.heap)

        return this;
    }
}


let minHeap = new MinHeap();


minHeap
    .insert(20)
    .insert(19)
    .insert(13)
    .insert(11)
    .insert(9)
    .insert(10)
    .insert(5)
    .insert(15)
    .insert(8)
    .insert(17)
    .print()


// left child = i * 2
// right child = i * 2 + 1
// parent = i / 2