

setInterval(loop, 16);
var sizeX = 10;
var sizeY = 30; 
var locationX = 10;
var locationY = 10;

function loop() {
	ctx.fillStyle = "rgba(255,255,255,1)";
	ctx.fillRect(0, 0, cwidth, cheight);

	ctx.fillStyle = "rgba(210,89,194,1)";
	ctx.fillRect(mouse.x, mouse.y, 100, 100);
	
	ctx.fillStyle = "rgba(255,255,0,1)";
	ctx.fillRect(locationX, locationY, sizeX, sizeY);

	if (keys.a == true){
		locationX = locationX-5;
	} 

	if (keys.w == true){
		locationY = locationY-5;
	} 

	if (keys.s == true){
		locationY = locationY+5;
	} 

	if (keys.d == true){
		locationX = locationX+5;
	} 
}