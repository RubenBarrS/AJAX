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
	var xhr= xml.responseXML;
	var obj_nombre= xhr.getElementsByTagName('nombre');
	for(i=0;i<obj_nombre.length;i++){
		var tel = xhr.getElementsByTagName("tlf")[i].childNodes[0].nodeValue;
		var nombre=obj_nombre[i].childNodes[0].nodeValue;
		var obj_p= document.createElement("p");
		obj_p.innerHTML= "NOMBRE: "+nombre + " Telefono: "+ tel;
		obj_div.appendChild(obj_p);
	}	

}