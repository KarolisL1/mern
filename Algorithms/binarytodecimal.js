//https://www.rapidtables.com/convert/number/binary-to-decimal.html
function binary2decimal(str){
    // for (let i=0; i<str.length; i++){
    //     if (str[i]!=="0" && str[i]!=="1"){
    //         return "Invalid input";
    //     }
    // }
    var dec = 0;
    for (let i=0; i<str.length; i++){
        if (str[i]==="1"){
            dec += Math.pow(2,str.length-i-1);
        }
    }
    return dec;
}


console.log(binary2decimal("10111")) //23