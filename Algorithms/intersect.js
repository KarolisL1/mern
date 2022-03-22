// 1. Intersect Sorted Arrays
// Given two sorted arrays, return a new array containing all the numbers they have in common
// This includes duplicates too! The intersection of [2,2] and [2,2,2] would be [2,2]

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,7,9,10]
//Ex: given [1,1,4,5,8] and [1,1,1,5,6,8] return [1,1,5,8]
//Ex: given [1,3,5,7,9] and [2,4,6,8,10] return []

function intersect(arr1, arr2){
    output = []
    obj = {}
    for (let i=0; i<arr1.length; i++){
        obj[arr1[i]] = true
    }
    console.log(obj)
    for (let j=0; j<arr2.length; j++){
        if (obj[arr2[j]]){
            output.push(arr2[j])
        }
    }
    return output
}
//console.log(intersect([1,1,4,5,8],[1,1,1,5,6,8]))


//Build in function includes
function intersect2(arr1, arr2){
    output = []
    for (let i=0; i<arr1.length; i++){
        if (arr2.includes(arr1[i])){
            output.push(arr1[i])
        }
    }
    return output
}

console.log(intersect2([1,1,4,5,8],[1,1,1,5,6,8]))


// 2. Union Sorted Arrays
// Efficiently combine two pre-sorted arrays into a new sorted array
// no built in functions!!!

// Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,3,4,5,7,9,10]
// Ex: given [1,2,2,2,7] and [2,2,6,6,7] return [1,2,2,2,6,6,7]
// Ex: given [1,5,9] and [2,6,10] return [1,2,5,6,9,10]


const intersect = (arr1, arr2) => {
    const result = [];
    let [x,y] = [0,0];
    while (x < arr1.length && y < arr2.length) {
        if (arr1[x] < arr2[y]) x++;
        if (arr1[x] > arr2[y]) y++;
        if (arr1[x]===arr2[y])
        {result[result.length] = arr1[x], x,y++}
    }return result;
}
let arr1 = [1, 2, 2, 3, 4];
let arr2 = [2, 2, 4, 6, 7, 8];
console.log(intersect(arr1, arr2));





const unionSortedArrays = (arr1, arr2) => {
    const result = [];
    let [i,j] = [0,0];
        while ( i < arr1.length || j < arr2.length){
            if (arr1[i] < arr2[j] || !arr2[j]){
                result[result.length] = arr1[i];
                i++;
            }else{
                result[result.length] = arr2[j];
                j++;
            }
        }return result;
}
console.log(unionSortedArrays([0,3,4,31], [4,6,30]));