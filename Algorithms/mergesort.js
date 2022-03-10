//create a helper function that takes 2 already sorted array, and combines them into one sorted array and returns that new sorted array

const combineSortedArrays = (arr1, arr2) => {
    //result array that will contain values from both the input arrays
    let result = []
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++;
        } else {
            result.push(arr2[j])
            j++;
        }
    }
    //if there are still values in the first array, add them to the result array
    while (i < arr1.length) {
        result.push(arr1[i])
        i++;
    }
    //if there are still values in the second array, add them to the result array
    while (j < arr2.length) {
        result.push(arr2[j])
        j++;
    }





    //at the end
    return result
}


// console.log(combineSortedArrays([1,3,5,5,6], [2,3,4,9])) //[1,2,3,3,4,5,5,6,9]



//https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

const mergeSort = (arr) => {

    if (arr.length === 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    // console.log(mid)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return combineSortedArrays(mergeSort(left), mergeSort(right))
}

mergeSort([1, 3, 5, 5, 6])