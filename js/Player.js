class Player {
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