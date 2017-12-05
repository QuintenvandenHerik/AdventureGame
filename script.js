var items = 0;
var crafting = false;
var greenOrb = false;
var blueOrb = false;
var room0 = document.getElementById("containerRoom0");
var room1 = document.getElementById("containerRoom1");
var room2 = document.getElementById("containerRoom2");
var room3 = document.getElementById("containerRoom3");
var room4 = document.getElementById("containerRoom4");
var room5 = document.getElementById("containerRoom5");
var room6 = document.getElementById("containerRoom6");
var room7 = document.getElementById("containerRoom7");
var room8 = document.getElementById("containerRoom8");
var room9 = document.getElementById("containerRoom9");
var room10 = document.getElementById("containerRoom10");
var room11 = document.getElementById("containerRoom11");
var room12 = document.getElementById("containerRoom12");
var room13 = document.getElementById("containerRoom13");
var room14 = document.getElementById("containerRoom14");
var room15 = document.getElementById("containerRoom15");
var room16 = document.getElementById("containerRoom16");
var planet1 = document.getElementById("grassPlanet");
var planet2 = document.getElementById("leafPlanet");
var planet3 = document.getElementById("shroomPlanet");
var planet4 = document.getElementById("oceanPlanet");
var planet5 = document.getElementById("desertPlanet");
var planet6 = document.getElementById("magmaPlanet");
var planet7 = document.getElementById("steampunkPlanet");



function start() {
	document.getElementById("loadingScreen").style.visibility = "visible";
	room0.style.visibility = "hidden";
	room1.style.visibility = "hidden";
	room2.style.visibility = "hidden";
	room3.style.visibility = "hidden";
	room4.style.visibility = "hidden";
	room5.style.visibility = "hidden";
	room6.style.visibility = "hidden";
	room7.style.visibility = "hidden";
	room8.style.visibility = "hidden";
	room9.style.visibility = "hidden";
	room10.style.visibility = "hidden";
	room11.style.visibility = "hidden";
	document.getElementById("toolBar").style.visibility = "hidden";
	document.getElementById("greenOrb").style.visibility = "hidden";
	
	var x = setInterval(function() {
		room0.style.visibility = "visible";
		document.getElementById("loadingScreen").style.visibility = "hidden";
	}, 7600);
}

window.onload = goToRoom16//start;

//Hallway
function goToRoom1() {
	room1.style.visibility = "visible";
	room0.style.visibility = "hidden";
	room2.style.visibility = "hidden";
	document.getElementById("toolBar").style.visibility = "visible";
}
//Prison
function goToRoom2() {
	room2.style.visibility = "visible";
	room1.style.visibility = "hidden";
	room3.style.visibility = "hidden";
	room4.style.visibility = "hidden";
	document.getElementById("greenOrb").style.visibility = "hidden";
}
//Cell
function goToRoom3() {
	room3.style.visibility = "visible";
	room2.style.visibility = "hidden";
	room7.style.visibility = "hidden";
	if (greenOrb === true) {
		document.getElementById("greenOrb").style.visibility = "hidden";
	}
	else {
		document.getElementById("greenOrb").style.visibility = "visible";
	}
}
//Stairs
function goToRoom4() {
	room4.style.visibility = "visible";
	room2.style.visibility = "hidden";
	room5.style.visibility = "hidden";
	document.getElementById("greenFeathers").style.visibility = "hidden";
}
//Dwarf Hall
function goToRoom5() {
	room5.style.visibility = "visible";
	room4.style.visibility = "hidden";
	room6.style.visibility = "hidden";
	if (greenFeathers === true) {
		document.getElementById("greenFeathers").style.visibility = "hidden";
	}
	else {
		document.getElementById("greenFeathers").style.visibility = "visible";
	}
}
//Dwarf Altar
function goToRoom6() {
	room6.style.visibility = "visible";
	room5.style.visibility = "hidden";
	document.getElementById("greenFeathers").style.visibility = "hidden";
}
//Tunnel
function goToRoom7() {
	if (crafting === false) {
		room7.style.visibility = "visible";
		room3.style.visibility = "hidden";
		room8.style.visibility = "hidden";
		room9.style.visibility = "hidden";
		document.getElementById("greenOrb").style.visibility = "hidden";
	}
}

//T-Cleavage
function goToRoom8() {
	room8.style.visibility = "visible";
	room7.style.visibility = "hidden";
	room10.style.visibility = "hidden";
	room11.style.visibility = "hidden";
}

//Cabin
function goToRoom9() {
		room9.style.visibility = "visible";
		room7.style.visibility = "hidden";
}
//Left Hall
function goToRoom10() {
	room10.style.visibility = "visible";
	room8.style.visibility = "hidden";
}
//Right Hall
function goToRoom11() {
	room11.style.visibility = "visible";
	room8.style.visibility = "hidden";
	room12.style.visibility = "hidden";
	document.getElementById("blueOrb").style.visibility = "hidden";
}
//Sewer
function goToRoom12() {
	room12.style.visibility = "visible";
	room13.style.visibility = "hidden";
	room11.style.visibility = "hidden";
	if (blueOrb === true) {
		document.getElementById("blueOrb").style.visibility = "hidden";
	}
	else {
		document.getElementById("blueOrb").style.visibility = "visible";
	}
}
//Lower Bridge
function goToRoom13() {
	room13.style.visibility = "visible";
	room12.style.visibility = "hidden";
	room14.style.visibility = "hidden";
	document.getElementById("blueOrb").style.visibility = "hidden";
}
//Upper Bridge
function goToRoom14() {
	room14.style.visibility = "visible";
	room13.style.visibility = "hidden";
	room15.style.visibility = "hidden";
}
//UpperBridgeStairs
function goToRoom15() {
	room15.style.visibility = "visible";
	room14.style.visibility = "hidden";
	room16.style.visibility = "hidden";
}
//Galaxy
function goToRoom16() {
	room16.style.visibility = "visible";
	room15.style.visibility = "hidden";
	//room17.style.visibility = "hidden";
}
//Planet
function goToPlanet1() {
	planet1.style.visibility = "visible";
	room16.style.visibility = "hidden";
}
//Planet
function goToPlanet2() {
	planet2.style.visibility = "visible";
	room16.style.visibility = "hidden";
}
//Planet
function goToPlanet3() {
	planet3.style.visibility = "visible";
	room16.style.visibility = "hidden";
}
//Planet
function goToPlanet4() {
	planet4.style.visibility = "visible";
	room16.style.visibility = "hidden";
}
//Planet
function goToPlanet5() {
	planet5.style.visibility = "visible";
	room16.style.visibility = "hidden";
}
//Planet
function goToPlanet6() {
	planet6.style.visibility = "visible";
	room16.style.visibility = "hidden";
}
//Planet
function goToPlanet7() {
	planet7.style.visibility = "visible";
	room16.style.visibility = "hidden";
}



function craftingPannel() {
	document.getElementById("craftingPannel").style.visibility = "visible";
	crafting = true;
}

function closeCraftingPannel() {
	document.getElementById("craftingPannel").style.visibility = "hidden";
	crafting = false;
}

function createRecipe(nr){
	var recipeContainer = document.createElement("DIV");
	var recipe = document.createElement("DIV");
	var craft = document.createElement("BUTTON");
	var container = document.getElementById("craftingPannel");
	recipeContainer.setAttribute("id", "recipeContainer"+nr);
	recipe.setAttribute("id", "recipe"+nr);
	craft.setAttribute("id", "craft"+nr);
	craft.setAttribute("class", "craft");
	container.appendChild(recipeContainer);
	recipeContainer.appendChild(recipe);
	recipeContainer.appendChild(craft);
}

for (var i = 1; i <= 7; i++){
	createRecipe(i);
}

function craftRecipe1() {
	if (greenOrb & greenFeathers === true) {
		alert("craft completed");
	}
	else {
		alert("craft incompleted");
	}
}

function createInvetorySlot(nr){
	var Slot = document.createElement("DIV");
	var container = document.getElementById("inventoryPannel");
	Slot.setAttribute("id", "inventorySlot"+nr);
	Slot.setAttribute("name", "inventorySlots");
	container.appendChild(Slot);
}

for (var i = 1; i <= 49; i++){
	createInvetorySlot(i);
}

function pickUpGreenOrb() {
	items++;
	greenOrb = true;
	document.getElementById("greenOrb").style.visibility = "hidden";
	console.log(items);
	document.getElementById("inventorySlot"+items).style.backgroundImage = "url(greenOrb.png)";
}

function pickUpGreenFeathers() {
	items++;
	greenFeathers = true;
	document.getElementById("greenFeathers").style.visibility = "hidden";
	console.log(items);
	document.getElementById("inventorySlot"+items).style.backgroundImage = "url(greenFeathers.png)";
}

function pickUpBlueOrb() {
	items++;
	blueOrb = true;
	document.getElementById("blueOrb").style.visibility = "hidden";
	console.log(items);
	document.getElementById("inventorySlot"+items).style.backgroundImage = "url(blueOrb.png)";
}

function pickUpBlueFeathers() {
	items++;
	BlueFeathers = true;
	document.getElementById("BlueFeathers").style.visibility = "hidden";
	console.log(items);
	document.getElementById("inventorySlot"+items).style.backgroundImage = "url(BlueFeathers.png)";
}


document.getElementById("startGame").addEventListener("click", goToRoom1);
document.getElementById("craft").addEventListener("click", craftingPannel);
document.getElementById("buttonToRoom2").addEventListener("click", goToRoom2);
document.getElementById("buttonToRoom3").addEventListener("click", goToRoom3);
document.getElementById("buttonToRoom4").addEventListener("click", goToRoom4);
document.getElementById("buttonToRoom5").addEventListener("click", goToRoom5);
document.getElementById("buttonToRoom6").addEventListener("click", goToRoom6);
document.getElementById("buttonToRoom7").addEventListener("click", goToRoom7);
document.getElementById("buttonToRoom8").addEventListener("click", goToRoom8);
document.getElementById("buttonToRoom9").addEventListener("click", goToRoom9);
document.getElementById("buttonToRoom10").addEventListener("click", goToRoom10);
document.getElementById("buttonToRoom11").addEventListener("click", goToRoom11);
document.getElementById("buttonToRoom12").addEventListener("click", goToRoom12);
document.getElementById("buttonToRoom13").addEventListener("click", goToRoom13);
document.getElementById("buttonToRoom14").addEventListener("click", goToRoom14);
document.getElementById("buttonToRoom15").addEventListener("click", goToRoom15);
document.getElementById("buttonInvestigate").addEventListener("click", goToRoom16);
document.getElementById("buttonPlanet1").addEventListener("click", goToPlanet1);
document.getElementById("buttonPlanet2").addEventListener("click", goToPlanet2);
document.getElementById("buttonPlanet3").addEventListener("click", goToPlanet3);
document.getElementById("buttonPlanet4").addEventListener("click", goToPlanet4);
document.getElementById("buttonPlanet5").addEventListener("click", goToPlanet5);
document.getElementById("buttonPlanet6").addEventListener("click", goToPlanet6);
document.getElementById("buttonPlanet7").addEventListener("click", goToPlanet7);
document.getElementById("returnToRoom1").addEventListener("click", goToRoom1);
document.getElementById("returnToRoom2a").addEventListener("click", goToRoom2);
document.getElementById("returnToRoom2b").addEventListener("click", goToRoom2);
document.getElementById("returnToRoom3").addEventListener("click", goToRoom3);
document.getElementById("returnToRoom4").addEventListener("click", goToRoom4);
document.getElementById("returnToRoom5").addEventListener("click", goToRoom5);
document.getElementById("returnToRoom7a").addEventListener("click", goToRoom7);
document.getElementById("returnToRoom7b").addEventListener("click", goToRoom7);
document.getElementById("returnToRoom8a").addEventListener("click", goToRoom8);
document.getElementById("returnToRoom8b").addEventListener("click", goToRoom8);
document.getElementById("returnToRoom11").addEventListener("click", goToRoom11);
document.getElementById("returnToRoom12").addEventListener("click", goToRoom12);
document.getElementById("returnToRoom13").addEventListener("click", goToRoom13);
document.getElementById("returnToRoom14").addEventListener("click", goToRoom14);
document.getElementById("returnToRoom15").addEventListener("click", goToRoom15);
document.getElementById("closeCraftingPannel").addEventListener("click", closeCraftingPannel);
document.getElementById("greenOrb").addEventListener("click", pickUpGreenOrb);
document.getElementById("blueOrb").addEventListener("click", pickUpBlueOrb);
document.getElementById("greenFeathers").addEventListener("click", pickUpGreenFeathers);
document.getElementById("blueFeathers").addEventListener("click", pickUpBlueFeathers);
document.getElementById("craft1").addEventListener("click", craftRecipe1);
/*document.getElementById("craft2").addEventListener("click", craftRecipe2);
document.getElementById("craft3").addEventListener("click", craftRecipe3);
document.getElementById("craft4").addEventListener("click", craftRecipe4);
document.getElementById("craft5").addEventListener("click", craftRecipe5);
document.getElementById("craft6").addEventListener("click", craftRecipe6);
document.getElementById("craft7").addEventListener("click", craftRecipe7);*/