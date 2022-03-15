//input a astring

str = "  Test  labas     labas    katu"

const stringToWordArray = (str) => {
    let word = "";
    let arr = [];
    for (let i=0; i<str.length; i++) {
        if (str[i] != " ") {
            word += str[i]
        } 
        else {
            if (word.length > 0) {
            arr.push(word);
            word = "";
            }
        }
    }
    return arr;
};
console.log(stringToWordArray(str))