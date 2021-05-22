function showRoomRow(Room, Height, Length, Width, Area) {
	document.write('<tr><td>'+Room+'</td>');
	document.write('<td>'+Height+'</td>');
	document.write('<td>'+Length+'</td>');
	document.write('<td>'+Width+'</td>');
	document.write('<td>'+Area+'</td></tr>');
}
function calculateArea(height, length, width){
	var wall1area, wall2area, wall3area, wall4area; 
	wall1area = height * length;
	wall2area = height * width;
	wall3area = height * length;
	wall4area = height * width;
	totalArea = wall1area + wall2area + wall3area + wall4area;
	return totalArea;
}
function getRoomName(){
	Room = prompt("Enter room name? ");
	return Room;
}
function getHeight(Room){
	Height = Number(prompt("Enter " + Room + "'s height of room? "));
	return Height;
}
function getLength(Room){
	Length = Number(prompt("Enter " + Room + "'s length of room? "));
	return Length;
}
function getWidth(Room){
	Width = Number(prompt("Enter " + Room +"'s width of room? "));
	return Width;
}
function getAndShowRoomArea(){
	name = getRoomName();
	height = getHeight(name);
	length = getLength(name);
	width = getWidth(name);
	area= calculateArea(height, length, width);
	showRoomRow(name, height, length, width, area);
	return area;
	
}


function getGPSF(){
	SFPG = Number(prompt("Enter square feet per gallons of paint will cover? "));
	GPSF = 1/ SFPG;
	return GPSF;
} 

function calculateGallons(totalArea, GPSF){ 
	gallons = totalArea * GPSF;
	return gallons;
}

function showTotals(totalArea, gallons) {
	document.write("<br><h2><u>Totals</u></h2>");
	document.write("<b>Paintable Area: "+totalArea+" square feet</b><br>");
	document.write("<b>Gallons needed: "+gallons+"</b><br>");
}

function openTable() {
	document.write('<table border="1">');
}

function showHeaderRow() {
	document.write('<tr>');
	document.write('<th style="width: 100px">Room</th>');
	document.write('<th style="width: 100px">Height</th>');
	document.write('<th style="width: 100px">Length</th>');
	document.write('<th style="width: 100px">Width</th>');
	document.write('<th style="width: 100px">Area</th>');
	document.write('</tr>');
	}

function closeTable() {
	document.write("</table><br>");
	}
function calculatePaint( ){
	openTable();
	showHeaderRow();
	var totalArea = 0;
	var GPSF = getGPSF();
	var roomArea = getAndShowRoomArea();
	totalArea = totalArea + roomArea;
	closeTable();
	var gallons = calculateGallons(totalArea, GPSF);
	showTotals(totalArea, gallons);
	}

calculatePaint();
