function generate() {
	
	//Check to see if datepicker field is empty
	if($("#datepicker").datepicker("getDate") === null) {
	alert("Please Select Your Birthday!");
	die();
  
}
	
	document.getElementById("msg").innerHTML =
	"<b>Here are your Lucky Lotto Numbers!</b>";
	
	//generates random number between 1 and 100
	var a = Math.floor((Math.random() * 100) + 1);
	//javascript method uses dom property to maipulate html content
	document.getElementById("number1").innerHTML = a;
	
	//generates random number between 1 and 100
	var b = Math.floor((Math.random() * 100) + 1);
	//javascript method uses dom property to maipulate html content
	document.getElementById("number2").innerHTML = b;
	
	//generates random number between 1 and 100
	var c = Math.floor((Math.random() * 100) + 1);
	//javascript method uses dom property to maipulate html content
	document.getElementById("number3").innerHTML = c;
	
	//generates random number between 1 and 100
	var d = Math.floor((Math.random() * 100) + 1);
	//javascript method uses dom property to maipulate html content
	document.getElementById("number4").innerHTML = d;
	
	//generates random number between 1 and 100
	var e = Math.floor((Math.random() * 100) + 1);
	//javascript method uses dom property to maipulate html content
	document.getElementById("number5").innerHTML = e;
	
	//generates random number between 1 and 100
	var f = Math.floor((Math.random() * 100) + 1);
	//javascript method uses dom property to maipulate html content
	document.getElementById("number6").innerHTML = f;

	//Hide Magic button once clicked
	document.getElementById('button').style.visibility='hidden';

}






