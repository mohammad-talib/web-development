console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/






var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35},
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zahgfjfhjfjfjeer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

var mohammed = {
  name: {firstName:"mohammed", lastName: "talib"},
  age: 29,
  dob: "6/5/1990",
  favoriteFood: ["shawrma", "kabab", "dolma"],
  favoriteMovie: ["a","b","c","d","e"]
}
console.log(mohammed.name);

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides
Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/

function firstName(object){
  output = [];
  for (var i = 0; i < persons.length; i++) {
    output.push(persons[i].name.first);

  }
  return output;

}
console.log(firstName(persons));

/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons
Ex: averageAge(persons) => 41.2
*/

function averageAge(object){
  output = 0;
  for(i=0; i<object.length; i++){
    output += persons[i].age;
  }
  return output / object.length;
}
console.log(averageAge(persons));

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person
Ex: olderPerson(persons) => "Soso Al-Amora"
*/

function olderPerson(object){
  for (var i = 1; i < object.length; i++) {
    if (object[i].age > object[0].age) {
      var fullName = object[i].name.first + " " +object[i].name.last;
    }else{
      var fullName = object[0].name.first + " " +object[0].name.last;
    }
  }
  return fullName;
}
console.log(olderPerson(persons));


/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/

function longestName(object){
  var fullName = "";
  var long = object[0].name.first.length + object[0].name.last.length;
  for (var i = 1; i < object.length; i++) {

      if (object[i].name.first.length + object[i].name.last.length > long){

        long = object[i].name.first.length + object[i].name.last.length;

        fullName = object[i].name.first + " " + object[i].name.last;
      }
  }
  return fullName;
}
console.log(longestName(persons));

/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/
function longestName(object){
  var fullName = "";
  var long = object[0].name.first.length + object[0].name.last.length;

  for (var i = 1; i < object.length; i++) {

      if (object[i].name.first.length + object[i].name.last.length > long){

        long = object[i].name.first.length + object[i].name.last.length;
        
        fullName = object[i].name.first + " " + object[i].name.last;
      }
  }
  return fullName;
}
console.log(longestName(persons));
//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??
Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/


function repeatWord(string){
  var lowerStr = string.toLowerCase();
  var splitStr = lowerStr.split(" ");
  var keys = [];
  var value = [];
  var newObject = {};

  for (var i = 0; i < splitStr.length; i++) {
      var count = 0;
      keys[i] = splitStr[i];
      for (var k = 0; k < splitStr.length; k++) {
        if (splitStr[i] == splitStr[k]) {
          count++;
        }
      }
      value[i]=count;
  }
  keys.forEach((key,i) => newObject[key] = value[i]);

  return newObject;

}
console.log(repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"));



/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??
Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/

function repeatChar(string){
  var lowerStr = string.toLowerCase();
  var splitStr = lowerStr.split("");
  var keys = [];
  var value = [];
  var newObject = {};

  for (var i = 0; i < splitStr.length; i++) {
      var count = 0;
      keys[i] = splitStr[i];
      for (var k = 0; k < splitStr.length; k++) {
        if (splitStr[i] == splitStr[k]) {
          count++;
        }
      }
      value[i]=count;
  }
  keys.forEach((key,i) => newObject[key] = value[i]);

  return newObject;

}
console.log(repeatChar("My name is alex mercer class name B baba mama hello Hello HELLO"));

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array
Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/

function selectFromObject(object, array){

  var output = {}; 

  for (var i = 0; i < array.length; i++) {
      if (object[array[i]] != null) {
        output[array[i]] = object[array[i]];
      }
  }
  return output;

}
console.log(selectFromObject({a: 1, cat: 3, c:4}, ['a', 'cat', 'd']));

/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object
Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/

function objectToArray(object){
  
  var count = 0;

  for (var i = 0; i < object.length; i++) {
      count++;
  }
  return count;
}
console.log(objectToArray(["Moh",24,52]));

/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object
Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/


/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable
Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/


/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable
Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/


/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable
Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/


/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object
Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']
*/


/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object
Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]
*/


/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/


/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object
Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/


/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even
Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/


/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key
Ex: evenValue({car:1, school:2, monster:3, alexMercer:4})=> 4
*/