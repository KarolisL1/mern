const selectionSort = (arr) => {
    for(let j = 0; j < arr.length - 1; j++) {
        let largest = 0;
        for(let i=0; i<arr.length - j; i++){
            if (arr[i] > arr[largest]){
                largest = i;
            }
        }
        [arr[arr.length - j - 1], arr[largest]] = [arr[largest], arr[arr.length-j - 1]];
    }
    return arr
}


console.log(selectionSort([4,8,5,2,1,0,9,7]));