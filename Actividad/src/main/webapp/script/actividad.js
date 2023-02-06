alert(document.lastModified);
function ejemplo1()
{
	
	var apellido =document.getElementById("apellit").value;
	 var nombre = document.getElementById("nombret").value;

	let media=(4.5+2.1);
	document.cookie = "nombre="+nombre;
	document.cookie = "apellido="+apellido;
	
	document.write("Alumno: "+nombre.charAt(0)+"."+apellido.charAt(0)+". Con media: "+media/2+" Es de tipo: "+typeof(media)+" ");
	document.write(document.cookie);
}