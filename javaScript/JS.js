// JavaScript Document

function myFunction() {
	var x = document.getElementById("myNumbers").value;
	if(!parseInt(x))
	{
		document.getElementById("writeNumbers").innerHTML = "NaN";
	}
	else
	{
		document.getElementById("writeNumbers").innerHTML = x;
	}
}