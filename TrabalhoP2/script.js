function validar()
{
	letras=new RegExp("^[a-zA-Z]+$");
	numeros=new RegExp("^[0-9]+$");

	if((letras.test(document.getElementById("nome").value)) === false)
	{
		alert("O campo " + document.getElementById("nome").id + " deve conter apenas letras");
	}
	if((letras.test(document.getElementById('sobrenome').value)) === false)
	{
		alert("O campo " + document.getElementById('sobrenome').id + " deve conter apenas letras");
	}
	if((letras.test(document.getElementById('bairro').value)) === false)
	{
		alert("O campo " + document.getElementById('bairro').id + " deve conter apenas letras");
	}
	if((letras.test(document.getElementById('cidade').value)) === false)
	{
		alert("O campo " + document.getElementById('cidade').id + " deve conter apenas letras");
	}
	if((numeros.test(document.getElementById('rg').value)) === false)
	{
		alert("O campo " + document.getElementById('rg').id + " deve conter apenas numeros");
	}
	if((numeros.test(document.getElementById('cep1').value)) === false)
	{
		alert("O campo " + document.getElementById('cep1').id + " deve conter apenas numeros");
	}
	if((numeros.test(document.getElementById('cep2').value)) === false)
	{
		alert("O campo " + document.getElementById('cep2').id + " deve conter apenas numeros");
	}
	if((numeros.test(document.getElementById('cpf1').value)) === false)
	{
		alert("O campo " + document.getElementById('cpf1').id + " deve conter apenas numeros");
	}
	if((numeros.test(document.getElementById('cpf2').value)) === false)
	{
		alert("O campo " + document.getElementById('cpf2').id + " deve conter apenas numeros");
	}
	if((numeros.test(document.getElementById('numero').value)) === false)
	{
		alert("O campo " + document.getElementById('numero').id + " deve conter apenas numeros");
	}
	if((document.getElementById('em1').value)!=(document.getElementById('em2').value))
	{
		alert("Os emails sao diferentes");
	}
	if((document.getElementById('psw1').value)!=(document.getElementById('psw2').value))
	{
		alert("As senhas nao combinam");
	}
}