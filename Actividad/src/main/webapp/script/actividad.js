alert(document.lastModified);
function ejemplo1()
{
	var nombre = "Jose";
	var apellido ="Garcia";
	let media=(4.5+2.1);
	document.cookie = "nombre=Jose";
	document.cookie = "apellido=Garcia";
	
	
	document.write("Alumno: "+nombre.charAt(0)+"."+apellido.charAt(0)+". Con media: "+media/2+" Es de tipo: "+typeof(media)+" ");
	document.write(document.cookie);
}