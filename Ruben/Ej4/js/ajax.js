function cargarProfe(){

	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4 && ajax.status==200)
		{
			Myprofes(ajax.responseXML);
		}
	}
	ajax.open("Get","profesor.xml");
	ajax.send();
}

function Myprofes(xml)
{	
	
	const arr = [];
	var obj_profesores = xml.getElementsByTagName("profesor");
	for(i=0;i<obj_profesores.length;i++)
	{
		var nombre=obj_profesores[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
		arr[i]=new Object();
		arr[i].nombre=nombre;

		var obj_asi=obj_profesores[i].getElementsByTagName('asignatura');
		arr[i].asignaturas=[];
		for(j=0;j<obj_asi.length;j++)
		{
			
			var asi=obj_asi[j].childNodes[0].nodeValue;
			arr[i].asignaturas[j]=asi;
		}
	

	}
	crearLista(arr);
}


function crearLista(profesores)
{
	var obj_div=document.getElementById('contenedor-profes');
	for(i=0;i<profesores.length;i++)
	{
		var obj_p=document.createElement("p");
		var lista=document.createElement("ul");
		var nombre=profesores[i].nombre;
		obj_p.innerHTML=nombre;
		var lista_asig = profesores[i].asignaturas;
		for(j=0;j<lista_asig.length;j++)
		{
			var obj_li=document.createElement("li");
			obj_li.innerHTML=lista_asig[j];
			lista.appendChild(obj_li);
			
		}
		obj_div.appendChild(obj_p);
		obj_div.appendChild(lista);
	}
}
