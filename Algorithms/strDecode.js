// /*
// create a function called strDecode() that does the following: 

// input: "a3b4c1d2"
// output: "aaabbbbcdd"


// */

// const strDecode = (str)=>{
//     // console.log("a".repeat(5))
//     let currChar = str[0];
//     let output = "";
//     for (let i = 1; i < str.length; i++){
//         // console.log(str[i])
//         //check if the current character is a number
//         if (!isNaN(str[i])){
//             output += currChar.repeat(str[i]);
//         }else{
//             currChar = str[i];
//         }
//     }
//     return output;
// }

// console.log(strDecode("a3b4c1d2")) //aaabbbbcdd





/*
create a function called strDecode() that does the following: 

input: "a3b4c1d2"
output: "aaabbbbcdd"


*/

const strDecode = (str)=>{
    // console.log("a".repeat(5))
    let currChar = str[0];
    let output = "";
    let currNum = ""
    for (let i = 1; i < str.length; i++){
        console.log({currNum,currChar, i, output})
        // console.log(str[i])
        //check if the current character is a number
        if(!isNaN(str[i])){
            currNum += str[i];
        }else{
            output += currChar.repeat(currNum);
            currChar = str[i];
            currNum = ""
        }
    }
    console.log("outside the for loop", {currNum,currChar})
    output += currChar.repeat(currNum);
    return output;
}

console.log(strDecode("a31b4c11d20")) //aaabbbbcdd