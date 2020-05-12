

setInterval(loop, 16);
var sizeX = 10;
var sizeY = 30; 
var locationX = 10;
var locationY = 10;

class MainCharacter {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.health = 100;
	}
	move(x, y) {
		this.x += x;
		this.y += y;
	}
	draw(){
		ctx.drawImage(img, this.x, this.y);
	}
}

idiot = new MainCharacter();

var img = new Image();
img.src = "resources/amazing.jpeg";
  
function loop() {
	ctx.fillStyle = "rgba(255,255,255,1)";
	ctx.fillRect(0, 0, cwidth, cheight);

	ctx.fillStyle = "rgba(210,89,194,1)";
	ctx.fillRect(mouse.x, mouse.y, 100, 100);
	
	ctx.fillStyle = "rgba(255,255,0,1)";
	ctx.fillRect(locationX, locationY, sizeX, sizeY);

	if (keys.a == true){
		idiot.move(-5, 0);
	} 

	if (keys.w == true){
		idiot.move(0, -5);
	} 

	if (keys.s == true){
		idiot.move(0, 5);
	} 

	if (keys.d == true){
		idiot.move(5, 0);
	}

	idiot.draw()
}