//1 

console.log(hello);
var hello = 'world';
//OUTPUT: undefined

/*
var hello
console.log(hello)
hello = 'world'
*/

//2
console.log("________________________")

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//OUTPUT: magnet

/*
var needle
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}
needle = 'haystack'
test()
*/

//3
console.log("________________________")

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

/*
var brendan
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool'
console.log(brendan);
*/
//OUTPUT: super cool


//4
console.log("________________________")

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

/*
var food
function eat(){
    var food
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken'
console.log(food);
eat();
*/
//OUTPUT: chicken, half-chicken

//5
console.log("555555555")

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

/*
var mean
mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
mean();
console.log(food);
console.log(food);
*/



//6
console.log("66666666")

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

/*
var genre
function rewind() {
    var genre
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco"
rewind();
console.log(genre);
*/


//7
console.log("________________________")

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

/*
function learn() {
    var dojo
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
*/
//OUTPUT: san jose, seattle, burbank, san jose


//8 BONUS

console.log("________________________")

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

/*
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
*/