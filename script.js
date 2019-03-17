
document.getElementById('textSex').onmouseover = function() {mouseOver()};
document.getElementById('textSex').onmouseout = function() {mouseOut()};

var idIntervals; //так надо
var delayTime = 5000;
var Name = "Куртатая";

function SexAndTheCity() {

	//айди параграфа, куда вставляется фразу
	var	textSex = document.getElementById('textSex');

	//параметры локального рандомайзера
	var min	= 0;
	var max = window.cities.length-1;
	var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);

    //получение рандомного города
	var city = window.cities[rand];
	var pluse = city.search(/\+/i);
	var cityFuck = city.substring (pluse+1, city.length);
	city = city.replace('\+','');


	//ввставка фразы в гипертекстовый файл
	var textToMilena = "Город " + city + ". В нём " + Name + " в жопу " + cityFuck + " -" + cityFuck;
	speak(textToMilena);
	textSex.innerHTML = "<p>Город <a href = \"https://ru.wikipedia.org/wiki/" + city +"\" target=\"_blank\">"
	+ city + "</a></br> В нём " + Name + " в жопу \"" 
	+ cityFuck + "-" + cityFuck + "\"</p>";
}


idIntervals = setInterval(SexAndTheCity, delayTime);


function mouseOver() {
  //document.getElementById('textSex').style.color = "red";
  clearInterval(idIntervals);
}


function mouseOut() { 
  //document.getElementById('textSex').style.color = "black";
  idIntervals = setInterval(SexAndTheCity, delayTime);
}


