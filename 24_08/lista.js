function adicionar() {
	var string = document.getElementById("string");
	var lista = document.getElementById("lista").innerHTML;
	lista=lista+"<li>"+string.value+"</li>";
	console.log(string.value);


	 document.getElementById("lista").innerHTML = lista;

}