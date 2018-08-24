function fatorial()
{
	var fat;
	var numero = prompt("Insira o valor para calcular a fatorial",);
	for(fat=1;numero>1;numero--)
	{
		fat = fat * numero;
	}
	alert(fat);
}

function palindromo()
{
	var texto = prompt("Insira o texto para ser checado",);
	var texto2 = texto.split('').reverse().join('');
	if (texto===texto2)
    	{
		alert("e um palindromo");
	}
	else
	{
		alert("Nao e um palindromo");
	}
}

function email()
{
	var email = prompt("Insira o email para ser validado");
	console.log(email);
	var exp = new RegExp("^[a-zA-z0-9.]+@[a-z0-9]+\.[a-z]{3}$");
	if (exp.test(email))
	{
		alert("Email valido");
	}
	else
	{
		alert("Email NAO valido");
	}
 }
