function cargarAlumnos(){

	var ajax = new XMLHttpRequest();
	ajax.open("get","http://api.open-notify.org/iss-now.json");
	ajax.send();
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4 && ajax.status==200){
			
			var obj_json = JSON.parse(ajax.responseText)
			var p_lat=document.createElement("p");
			var p_lon=document.createElement("p");
			var obj_div=document.getElementsByTagName('div')[0];
			p_lat.innerHTML=obj_json.iss_position.latitude;
			p_lon.innerHTML=obj_json.iss_position.longitude;

			obj_div.appendChild(p_lat);
			obj_div.appendChild(p_lon);
		}
	}
}

