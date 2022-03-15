/*
rotateString(str,num)
Given a string and a number, rotate the string by that number amount and return the rotated string

input: "good morning", 3
output: "inggood morn"


input: "abcde", 5
output: "abcde"


*/
const rotateString = (str, num) => {
    let newStr = '';
    num = num % str.length;
    console.log(num)
    for(let j=str.length-num; j<str.length; j++){
        newStr += str[j];
    }
    for (let i = 0; i < str.length - num; i++) {
        newStr += str[i];
    }
    return newStr;
}
console.log(rotateString("goodmorning", 3)) // "inggood morn"




/*
isRotation(str1,str2)
Given 2 strings, return true if they are rotations of one another, false if they are not

input: "good morning", "rninggood mo"
output: true


input: "abcde", "abccde"
output: false


*/