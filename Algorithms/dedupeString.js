/*

input: "sweet potato"

output: "swet poa"

*/

function dedupeString(str){
    let obj = {};
    let output = ""
    for (let i = 0; i < str.length; i++){
        obj[str[i]] = true
    }
    for (k in obj){
        output += k
    }
    return output
}
console.log(dedupeString("sweet potato"));