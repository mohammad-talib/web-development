/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
  var num1 = 20;
  var num2 = 5;
  function larger(){
  	if (num1>num2) {
  		return  "is larg";
  	}else{
  		return  "is small";
  	}
  }
  alert(larger());
 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  function sign(num){
  	if (num > 0) {
  		return "+"
  	}else{
  		return "-"
  	}
  }
  alert(sign(-5));
 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
  function sort(){
  	var number1 = 0;
  	var number2 = -1;
  	var number3 = 4;
  	if(number1 > number2 && number1 > number3){
  		if (number2 > number3){
  			return (number1 + "," + number2+ "," + number3);
  		}else{
  			return (number1 +","+ number3 +","+ number2);
  		}
  	}else if(number2 > number1 && number2 > number3){
  		if (number1 > number3) {
  			return (number2+ "," + number1+ "," + number3);
  		}else{
  			return (number2+ "," +number3 + "," + number1);
  		}
  	}else if (number3> number1 && number3>number2) {
  		if (number1>number2) {
  			return (number3+ "," +number1 + "," + number2);
  		}else
  			return (number3+ "," +number2 + "," + number1);
  	}
  	}
console.log(sort());

 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/

function larg(){
	n1=-5;
	n2=-2;
	n3=-6;
	n4= 0;
	n5=-1;

	  	if(n1 > n2 && n1 > n3 && n1>n4 && n1> n5){
	  		return n1;
	  	}else if(n2 > n1 && n2 > n3 && n2>n4 && n2> n5){
	  		return n2;
	  	}else if(n3 > n1 && n3 > n2 && n3>n4 && n3> n5){
  			
  			return n3;
  		}else if(n4>n1 && n4>n2 && n4>n3 && n4>n5){
  			return n4;
  		}else{
  			return n5;
  		}
	
}
console.log(larg())


  
 /******* End Your Code ********* */

 /* 5.Fix the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  function greater(){
  	var x = 10;
  	var y = 5;
  	if (x>y) {
  		return "Hello World";
  	}else{
  		return "Goodbye";
  	}
  }
  alert(greater());
 /******* End Your Code ********* */


/*write the if statement to display "Hello World" if x is greater than y.*/
/******* Start Your Code *********/
    function greater(){
  	var x = 10;
  	var y = 5;
  	if (x>y) {
  		return "Hello World";
  	}
  }
  alert(greater());
 /******* End Your Code ********* */