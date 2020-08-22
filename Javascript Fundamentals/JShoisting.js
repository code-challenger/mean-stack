//1: prediction: undefined(after changing single quotes to double quotes)

console.log(hello);
var hello = "world";

//2: prediction: will only print "magnet" - reset global variable needle to magnet and logs needsle(which is "magnet")

var needle = "haystack";
test();


function test(){
	var needle = "magnet";
	console.log(needle);
}

//3: prediction: print "super cool" once because it is a global variable that is logged - function is never called

var brendan = "super cool";
function print(){
	brendan = "only okay";
	console.log(brendan);
}
console.log(brendan);

//4 prediction:will print chicken once, since function is called and global variable is reassigned to "half-chicken" it will be printed. "gone" is never printed because it isn't logged 

var food = "chicken";
console.log(food);
eat();
function eat(){
	food = "half-chicken";
	console.log(food);
	var food = "gone";
}

//5 prediction: error out - mean(); not a function . console.log(food) will not print because food hasn't been defined. if you changeg second log to print mean() it will print "chicken" and "fish"

mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

//6 prediction: will first log "undefined" since genre is defined after, since function rewind is defined and called, it will print "rock" and "r&b". since global variable genre wasn't changed, the last console.log will print "disco"

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

//7 prediction: will print all dojo names (san jose twice)

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




