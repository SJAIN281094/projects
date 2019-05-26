//GLOBAL VARIABLE
var input = document.querySelector(".display");
var outputlength = document.querySelectorAll(".btn").length;

//BUTTON PRESS
for(i=0;i<outputlength;i++)
 {
	var button = document.querySelectorAll(".btn");
	button[i].addEventListener("mousedown",press);
	button[i].addEventListener("mouseup",unpress);
  
    function press()
	 {	
		this.style.boxShadow= "inset -0.1px 0.1px 1px 0.4px black";
		this.style.backgroundColor="red";
	    
	 }

	function unpress()
	 {
		this.style.boxShadow= "-0.1px 0.1px 1px 0.4px black";
		this.style.backgroundColor="#2b2b2b";
		
	 }
}

// DELETE
 var del= document.querySelector(".del");
 del.addEventListener("click",back);

	function back()
	 {
	    var digit = input.value.split("");
	  	digit.pop();
	    var digit = [digit].toString();
	    digit = digit.replace (/,/g, "");
	    input.value= digit;
	 }

     

//RESET INPUT
var refresh = document.querySelector(".reset");
refresh.addEventListener("click",rst);
console.log(refresh);

	function rst()
	 {
		input.value="";
		input.placeholder="0";
	 }


// NUMBER ENTERED AND LIMITED TO "10"DIGIT
for(i=0;i<11;i++)
 {
	var button = document.querySelectorAll(".digit");	
	button[i].addEventListener("click",click);

	function click()
	 {
		input.length=0;
		if(input.value.length<10)
	    {
			input.value += this.innerText;
 	    }
 else 
 	    {
   		 	input.value = input.value;
 	 	}

 	 }
}


// CALCULATION
var divide = document.querySelector(".divide");
var multiply = document.querySelector(".multiply");
var subtract = document.querySelector(".subtract");
var addition = document.querySelector(".addition");
var equal = document.querySelector(".equal");
var sqrt  = document.querySelector(".sqrt");
var percentage  = document.querySelector(".percentage");
var log  = document.querySelector(".log");



divide.addEventListener("click",division);

	function division()
	 {
	 	firstnumber = input.value;
	 	input.placeholder=firstnumber;	
	 	input.value="";
	 	operator = this.innerText;
	 }

multiply.addEventListener("click",multiplication);

	function multiplication()
	 {
	 	firstnumber = input.value;
	 	input.placeholder=firstnumber;	
	 	input.value="";
	 	operator = this.innerText;
	 }

subtract.addEventListener("click",subtraction);

	function subtraction()
	 {
	 	firstnumber = input.value;
	 	input.placeholder=firstnumber;	
	 	input.value="";
	 	operator = this.innerText;
	 }

addition.addEventListener("click",sum);

	function sum()
	 {
	 	firstnumber = input.value;
	 	input.placeholder=firstnumber;	
	 	input.value="";
	 	operator = this.innerText;
	 }

sqrt.addEventListener("click",sqroot);

	function sqroot()
	 {
	 	input.value = Math.round(10e9*Math.sqrt(input.value))/10e9;
	 }

percentage.addEventListener("click",perct);

	function perct()
	 {
	 	firstnumber = input.value;
	 	input.placeholder= input.value;
	 	input.value="";
	 	operator = this.innerText;
	 }

log.addEventListener("click",logi);

	function logi()
	 {
	 	input.value = Math.round(10e9*Math.log(input.value))/10e9;
	 }


equal.addEventListener("click",calculate);

function calculate()
	 {
	 	secondnumber = input.value;
	 	console.log(secondnumber);
	 	
	 	if(operator === "/")
	 		{
				//input.value=(firstnumber / secondnumber);
				input.value = Math.round(10e9*(firstnumber / secondnumber))/10e9
				var result = input.value;
				input.placeholder=result;
			}
			else
			{
				if(operator === "x")
	 		{
				input.value=(firstnumber * secondnumber);
				var result = input.value;
				input.placeholder=result;
			}
			else
			{
				if(operator === "-")
	 		{
				input.value=(firstnumber - secondnumber);
				var result = input.value;
				input.placeholder=result;
			}
			else
			{
				if(operator === "+")
	 		{
				input.value = ( Number(firstnumber) + Number(secondnumber));
				var result = input.value;
				input.placeholder=result;		
			}


			else
			{
				if(operator === "%")
	 		{
				input.value=( (Number(firstnumber)/100) * Number(secondnumber));
			    var result = input.value;
				input.placeholder=result;
			}
			}
			}
			}
			}
	 }

 








