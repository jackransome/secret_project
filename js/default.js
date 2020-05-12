

setInterval(loop, 10);

function loop() {
	ctx.fillStyle = "rgba(255,255,0,1)";
	ctx.fillRect(mouse.x, mouse.y, 100, 100);
}