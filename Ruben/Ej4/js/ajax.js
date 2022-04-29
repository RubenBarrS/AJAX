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
	const arr = [];
	var xhr=xml.responseXML;
	var obj_profesores = xhr.getElementsByTagName("profesor");
	for(i=0;i<obj_profesores.length;i++)
	{
		var obj_p=document.createElement("p");
		var nombre=obj_profesores[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
		arr[i]=new Object();
		arr[i].nombre=nombre;
		obj_p.innerHTML=arr[i].nombre;
		obj_div.appendChild(obj_p);

		var obj_asi=obj_profesores[i].getElementsByTagName('asignatura');
		var asig_texto="";
		for(j=0;j<obj_asi.length;j++)
		{
			var asi=obj_asi[j].childNodes[0].nodeValue;
			asig_texto=asig_texto+"\n"+asi;
		}
		arr[i].asig=asig_texto;

	}
	crearLista(arr);
}


function crearLista(lista_asignatura)
{

	var lista=document.createElement("ul");
	for(i=0;lista_asignatura.length;i++)
	{
		var asg=lista_asignatura[i].asig;
		var asig=asg.split("\n");
		for(j=0;j<asig.length;j++){
			var obj_li=document.createElement("li");
			obj_li.innerHTML=asig[j];
			lista.appendChild(obj_li);
		}
		document.getElementsByTagName("p")[0].appendChild(lista);
	}


}
