console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]
 ["Str" "alex","moh"
 'the','fox' 'over' lazy, 'dog',  ]
*/

var arrNum = [1,7,9,45];
var arrName = ["Str", "alex", "moh"];
var arrName2 = ['the', 'fox', 'over', 'lazy', 'dog',];

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
*/
var fruits=["Tomato","Banana","Watermelon"];

console.log(fruits[1]);
console.log(fruits[0]);

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

var favoriteFood = ["sawerma", "dolma", "briany", "burker", "supe"];
var favoriteSport = ["football" , "tinus", "swim"];
var favoriteMovie = ["angeleyes", "avenger", "lusy", "spiderman"];


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/


function firstOfArray(first){

	return first[0];
}
console.log(firstOfArray([1,4,5]));
console.log(firstOfArray(["t","u","g","x"]));


/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array
Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

function lastOfArray(last){

	return last[last.length-1];
}
console.log(lastOfArray([1,4,5]));
console.log(lastOfArray(["t","u","g","x"]));


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)
var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var array = [0,5,7,9];

array.push(10);
array.shift();
array.shift();
array.shift();
array.unshift(1,3,4,6,8);

console.log(array);
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
var array2 = [5,9,-7,3.5]
*/

var array2 = [5,9,-7,3.5];
//put number last of array
array2.push(5);
//put number first of array
array2.unshift(1);
//delete number from first of array
array2.shift();
//delete number from last of array
array2.pop();

console.log(array2);

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets
Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

function middleOfArray(num){

	if (num.length % 2 == 0) {
		num1 = num.length /2-1;
		num2 = num.length /2;

		return num[num1]+" "+num[num2];
	}else{
		num3 = Math.floor(num.length / 2);
		return num[num3];
	}

}
console.log(middleOfArray([1,4,5]));
console.log(middleOfArray(["t","u","g","x"]));

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

var animals = ['cat', 'ele', 'bird'];
animals[3]='zebra';
animals[4]='elephant';
console.log(animals);

var nums = [1,2,3,8,9];
nums[5]= 5;
nums[6]= -22;
nums[7]= 3.5;
nums[8]= 44;
nums[9]= 98;
nums[10]= 44
console.log(nums);

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index
var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9
**try more cases by your self
*/

function indexOfArray(array,index){
	var nums = [1,2,3,8,9];
	var x = array[index];
	return x;

}
console.log(indexOfArray(nums,3));

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]
**try more cases by your self
*/

function arrayExceptLast(array){
	var nums = [1,2,3,8,9];
	nums.pop();
	return nums;
}
console.log(arrayExceptLast(nums));

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array
var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]
**try more cases by your self
*/

function addToEnd(array, value){
	var nums = [1,2,3,8,9];
	nums.push(value);
	return nums;
}
console.log(addToEnd(nums,55));



// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array
var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//for
function sumArray(array){
	var sum = 0;
	for(i=0; i<array.length; i++){
			sum += array[i];
	}
	return sum;
}
console.log(sumArray([1,2,3,8,9]));


//while
function sumArrayWhile(array){
	var sum = 0;
	var i =0;
	while(i<array.length){
		
		sum += array[i];
		i++
	}
	
	return sum;
}
console.log(sumArrayWhile([1,2,3,8,9]));

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array
var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1
** solve it one time using for loop and another using while loop
**try more cases by your self
*/


//for
function minInArray(array){
	var minimum = array[0];
	for(var i=1; i<array.length; i++){
			if (array[i]<minimum){
			minimum=array[i];
			}
		}
		return minimum;
}
console.log(minInArray([1,2,3,8,9]));

//while
function minInArrayWhile(array){
	var minimum = array[0];
	var i = 1;
	while(i<array.length){

		if (array[i]<minimum){
			minimum=array[i];
		}
		i++;
	}
	return minimum;
}
console.log(minInArrayWhile([1,2,3,8,9]));

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it
var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//for loop
function removeFromArray(array,elemnt){

	for (var i = 0; i<array.length; i++) {
		if (array[i]===elemnt) {
			array.splice(i,1);
		}
		
	}
	return array;
}
console.log(removeFromArray([1,2,3,8,9],8))

//while loop

function removeFromArrayWhile(array, elemnt){
	var i = 0;
	while(i<array.length){
		if (array[i]===elemnt) {
			array.splice(i,1);
		}
		i++;
	}
	return array;
}
console.log(removeFromArrayWhile([1,2,3,8,9],8))

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts
var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//for loop
function oddArray(array){
	var odd = [];
	for(i = 0; i<array.length; i++){
		if(array[i]%2 == 1){
			odd.push(array[i]);
			
		}
	}
	return odd;
}
console.log(oddArray([1,2,3,8,9]));

//while loop

function oddArrayWhile(array){
	var odd = [];
	var i = 0;

	while(i<array.length){
		if(array[i]%2 == 1){
			odd.push(array[i]);
			
		}
		i++;
	}
	return odd;
}
console.log(oddArrayWhile([1,2,3,8,9]));

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array
var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6
var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//for loop
function aveArray(array){
	var num = 0;
	for(i=0; i<array.length; i++){
		num = num + array[i];
	}
	return num / array.length;
}
console.log(aveArray([1,2,3,8,9]));


//while loop
function aveArrayWhile(array){
	var num = 0;
	var i = 0;
	while(i<array.length){
		num = num + array[i];
		i++;
	}
	return num / array.length;
}
console.log(aveArrayWhile([1,2,3,8,9]));
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//for loop
function shorterInArray(array){
	var str = array[0];
	for(i=1; i<array.length; i++){
		if(array[i].length < str.length){
			str = array[i];
		}
		
	}
	return str;
}
console.log(shorterInArray(["aaaaaaaaaaaaaaaaa","aaa","madrasa","rashed2","emad","a","hala"]));

//while loop

function shorterInArrayWhile(array){
	var i=1;
	var str = array[0];
	while(i<array.length){
		if(array[i].length < str.length){
			str = array[i];
		}
		i++
	}
	return str;
}
console.log(shorterInArrayWhile(["aaaaaaaaaaaaaaaaa","aaa","madrasa","rashed2","emad","a","hala"]));
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string
var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function repeatChar(string , char){
	var string= "alex mercer madrasa rashed2 emad hala";
	var num = 0;
	for (var i = 0; i < string.length; i++) {
		if (string[i] == char) {
			return num++;
		}
	}
}
console.log(repeatChar("alex mercer madrasa rashed2 emad hala","a"));

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//forloop
function evenIndexOddLength(string){
	var newArr = string[0];
	for (var i = 1; i < string.length; i++) {
		if (string[i].length % 2 === 1) {
			return newArr = string[i];
		}
	}
}
console.log(evenIndexOddLength(["alex","mercer","madrasa","rashed2","emad","hala"]));

//while loop

function evenIndexOddLengthWhile(string){
	var newArr = string[0];
	var i = 1;
	while(i < string.length){
		if (string[i].length % 2 === 1) {
			return newArr = string[i];
		}
		i++;
	}
}
console.log(evenIndexOddLengthWhile(["alex","mercer","madrasa","rashed2","emad","hala"]));
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self
var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//for loop
function powerElementIndex(nums){
	var newNum = [];
	for (var i = 0; i < nums.length; i++) {
		newNum.push(nums[i]**[i]);
	}
	return newNum;
}
console.log(powerElementIndex([44, 5, 4, 3, 2, 10]));

//while loop

function powerElementIndexWhile(nums){
	var newNum = [];
	var i = 0;
	while(i<nums.length){
		newNum.push(nums[i]**[i]);
		i++;
	}
	return newNum;
}
console.log(powerElementIndexWhile([44, 5, 4, 3, 2, 10]));
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenNumberEvenIndex(array){
	var newStr = array[0]
	var newArr = [];
	for (var i = 1; i < array.length; i++) {
		if (array[i].length % 2 === 0 && array[i]%2 === 1) {
			return newStr = array[i];
		}
}
}
console.log(evenNumberEvenIndex([5,2,2,1,8,66,55,77,34,9,55,1]));