function cargarTiempo()
{
	var ajax= new XMLHttpRequest();
	ajax.open("get","ciudades.txt");
	ajax.send();

	ajax.onreadystatechange=function(){
		if(ajax.readyState==4 && ajax.status==200){

			var obj_select=document.createElement("select");
			obj_select.onchange=function(){valores(this.value);}
			var ciudades=ajax.responseText.split(",")
			for (i=0;i<ciudades.length;i++){
				var obj_option = document.createElement("option");
				obj_option.innerHTML=ciudades[i];
				obj_option.value="http://api.openweathermap.org/data/2.5/weather?q="+ciudades[i]+"&appid=57703a7a9ab7b873a99116a3ea379748"
				obj_select.appendChild(obj_option);
				
			}
			document.getElementsByTagName('body')[0].appendChild(obj_select);
		}
	}
}

function valores(ciudad){
	//OPeticion AHAX

	var ajax=new XMLHttpRequest();
	ajax.open("get",ciudad);
	ajax.send();
	ajax.onreadystatechange=function()
	{
		if(ajax.readyState==4 && ajax.status==200){
			var obj_json=JSON.parse(ajax.responseText);
			//alert(ajax.responseText);
			var obj_div=document.getElementsByTagName('div')[0];
			var p_temp_max = document.createElement("p");
			var p_temp_min = document.createElement("p");
			p_temp_max.innerHTML=obj_json.main.temp_max;
			p_temp_min.innerHTML=obj_json.main.temp_min;
			obj_div.innerHTML="";
			obj_div.appendChild(p_temp_max);
			obj_div.appendChild(p_temp_min);

		}
	}

}