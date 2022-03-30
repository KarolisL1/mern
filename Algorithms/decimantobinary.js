function deb2binary(num){
    var bin = "";
    while(num>0){
        bin = num%2 + bin;
        console.log(num%2);
        // console.log(bin)
        num = Math.floor(num/2);
        console.log("num",num);
    }
    return bin;
}

console.log(deb2binary(23));