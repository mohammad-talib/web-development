console.log('Here is : ', 'Reduce & Filter') 

//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];



/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array
Ex: avgAge(persons) => 41.2
*/

function avgAge(array){
	// var reducer = (x,y) => x+y;
	var sum = array.reduce((x,y) => {
		return x + y.age;
		
	},0);
	return sum / persons.length;
}
console.log(avgAge(persons));


/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name
Ex: longestName(persons) => 'Soso Al-Amora'
*/

function longestName(array){

	var fullName = array.reduce((x,y) => {
		if (x.length < (y.name.first + y.name.last).length) {
			return y.name.first+" "+y.name.last;
			}
			return x;
		
	},"");
	return fullName;
}
console.log(longestName(persons));

/*
3
Create a function called maxNumber
that accept an array
and return max number
Ex: maxNumber([1,2,4,9]) => 9
*/

function maxNumber(array){

	var max = array.reduce((x,y) => {
		if (x > y) {
			return x;
		}
		else{
			return y;
		}
	})
	return max;
}
console.log(maxNumber([100,150,4,9,8,20]));


/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string
Ex: repeatChar("hello world",w) => 1
*/

function repeatChar(string,char){
	var str = string.split("");
	var count = 0;
	var repeat = str.reduce((x,y) => {
		if (y == char) {
			count++;
		}
		
	},-1);return count;
	 
}
console.log(repeatChar("whello world","w"));

/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them
Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/

function usAndNumberBeetweenUs(num,num2){
var num = [num];
var num2 = [num2];
var array = num.reduce((x,y) => x++);
return array;
}
console.log(usAndNumberBeetweenUs(2,5));





//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only
Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
var arr = [1,8,6,4];

function evenOnly(array){
	var even = array.filter((x)=> {
		if (x%2==0) {
			return x;
		}
	});
	return even;
}
console.log(evenOnly(arr));

/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4
Ex: multiFour([1,8,6,4]) => [8,4]
*/

function multiFour(array){
	var even = array.filter((x)=> {
		if (x%4==0) {
			return x;
		}
	});
	return even;
}
console.log(multiFour(arr));

/*
8
**this question not that easy mybe you will need to use two function inside each other
Create a function called containChar
that accept an array of string
and return an array of these string that contain this char
Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/

function containChar(array,char){
	var arrChar = array.filter(x => {
		if (x.indexOf(char) !== -1) {
			return x;
		}
	});
	return arrChar;
}
console.log(containChar(["hello","world"],"w"));
console.log(containChar(["hello","world"],"l"));

/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
function evenIndexOddLength(arr){

var array = arr.filter((x,y) => (x.length % 2===1));
return array;
	
}
console.log(evenIndexOddLength(["alex","mercer","madrasa","rashed2","emad","hala"]));

/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number
Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/

function olderThan(arr,num){
	var array = arr.filter(x => x.age > num);
	return array;
}

console.log(olderThan(persons,56))
/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
function shorterThan(str,num){
	var array = str.filter(x => x.length < num);
	return array;
}
console.log(shorterThan(strings,5));
// if you finish the exercises review the material of the week and help your classmate