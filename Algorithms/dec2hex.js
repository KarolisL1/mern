function dec2hex(dec) {
    output = ""
    remaider = 0
    digit = 0
    while (dec > 0) {
        remaider = dec % 16
        dec = Math.floor(dec / 16)
        if (remaider < 10) {
            digit = remaider
        }
        else {
            digit = String.fromCharCode(remaider + 55)
        }
        output = digit + output
    }
return output
}


console.log(dec2hex(58))