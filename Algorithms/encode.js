/*
given a string with repeated consecutive characters, return the amount of each character as such:

input: "aaabbbbcdd"

output: "a3b4c1d2"

*/


function encode(str){
    var obj = {};
    var newStr = "";
    for (var i = 0; i < str.length; i++){
        if (obj[str[i]]){
        obj[str[i]] += 1;
        } else {
        obj[str[i]] = 1;
        }
    }
    for (var key in obj){
        newStr += key + obj[key];
    }
    return newStr;
}


console.log(encode("aaabbbbcdd")) //"a3b4c1d2"