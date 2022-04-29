function cargarProfe(){

	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4 && ajax.status==200)
		{
			Myprofes(ajax);
		}
	}
	ajax.open("Get","profesor.xml");
	ajax.send();
}

function Myprofes(xml)
{
	var obj_div=document.getElementsByTagName('div')[0];
	var xhr = xml.responseXML;
	var obj_profesores= xhr.getElementsByTagName("profesor");

	for(i=0;i<obj_profesores.length;i++)
	{
		var obj_p=document.createElement("p");
		var nombre= obj_profesores[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
		var lista_asi = obj_profesores[i].getElementsByTagName('asignatura');
		var texto="";
			for(j=0;j<lista_asi.length; j++)
			{
				var asi = lista_asi[j].childNodes[0].nodeValue;
				texto=asi +" "+ texto;
			}
		obj_p.innerHTML="NOMBRE: "+nombre + " Asignaturas: "+texto;
		obj_div.appendChild(obj_p);
	}
}