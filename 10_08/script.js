class Agenda
{
	constructor()
	{
		t1 = new Telefone("22","987800109");
		e1 = new Email("llll@lll.com");
		new Contato.add_pessoa("Joao",t1,e1);
	}

}
class Contato
{
	constructor()
	{
		this.pessoa=null;
		this.telefone=null;
		this.email=null;
	}
	 function addpessoa (nome,telefone,email)
	{

		//fazer filter para validar nome
		this.pessoa = new Pessoa(nome,telefone,email);
	}
}
class Pessoa
{
	constructor(nome,telefone,email)
	{
		this.nome=nome;
		this.endereco=email;
		this.telefone=telefone;
	}
}
class Email
{
	constructor(texto)
	{
		this.texto=texto;
	}
}

class Telefone
{
	constructor(numero,ddd)
	{
		this.numero=numero;
		this.ddd=ddd;
	}
}

window.onload = function()
{

	alert("a");
	a=new Agenda();
}
