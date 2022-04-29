function cargarAmigos()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange=function()
	{
		console.log("Status: "+this.status+" ReadyStae:"+this.readyState);
		if(ajax.readyState==4 && ajax.status==200)
		{
			Miamigos(ajax);
		}
	}
	ajax.open("Get","nomtlf.xml");
	ajax.send();
}


function Miamigos(xml)
{	
	var obj_div = document.getElementsByTagName("div")[0];
	var tabla = document.createElement("table");
	var xhr= xml.responseXML;
	var obj_nombre= xhr.getElementsByTagName('nombre');
	for(i=0;i<obj_nombre.length;i++){
		var obj_fila =document.createElement("tr");
		var obj_celda_nombre=document.createElement("td");
		var obj_celda_telefono=document.createElement("td");
		var tel = xhr.getElementsByTagName("tlf")[i].childNodes[0].nodeValue;
		var nombre=obj_nombre[i].childNodes[0].nodeValue;
		obj_celda_nombre.innerHTML=nombre;
		obj_celda_telefono.innerHTML=tel;

		obj_fila.appendChild(obj_celda_nombre);
		obj_fila.appendChild(obj_celda_telefono);
		tabla.appendChild(obj_fila);
		obj_div.appendChild(tabla);
		tabla.style.border="2px blue solid";
	}	

}