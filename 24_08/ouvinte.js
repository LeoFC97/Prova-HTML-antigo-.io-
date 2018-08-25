function ouvinte()
{
	var string = document.getElementById("string");
	var texto = document.getElementById("ta").innerHTML;
	texto = "voce esta digitando: " + string.value;

	document.getElementById("ta").innerHTML = texto;


}