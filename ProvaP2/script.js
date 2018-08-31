function enviar()
{
	var quartos = document.getElementById('qtquart').value;
	var pessoas = document.getElementById('qthosp').value;
	var d1 = new Date(document.getElementById("dataE").value);
    var d2 = new Date(document.getElementById("dataS").value);
    var milesimos = Math.abs(d1.getTime() - d2.getTime());
    var dias = milesimos / (1000 * 3600 * 24);



	if((document.getElementById('em1').value)!=(document.getElementById('em2').value))
	{
		alert("Os emails sao diferentes");
	}

	var valor= (((dias*quartos)*149) + (pessoas*60));
	alert("O valor total da reserva e de: "+valor);

}