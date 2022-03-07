//Buble sort
////https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

arr = [100, 23, 1, 12, 86, 6];


function bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr));