
keys = {
	escape: false,
	mouseLeft: false,
	space: false,
	shift: false,
	w: false,
	a: false,
	d: false,
	s: false,
	q: false,
	r: false,
	up: false,
	down: false,
	z: false,
	f: false,
	b: false,
	t: false
}

function mouseDown(event) {
keys.mouseLeft = 1;	
}

function mouseUp(event) {
keys.mouseLeft = 0;	
}

function onKeyDown(event) {

    var e = event.keyCode;

    switch (e)
    {
        case 68:
            keys.d = true;
            break;
            
        case 16:
            keys.shift = true;
            break;


        case 65:
            keys.a = true;
            break;

        case 81:
            keys.q = true;
            break;
			
       case 82:
            keys.r = true;
            break;
			
        case 32:

            keys.space = true;
            break;

        case 87:
            keys.w = true;
            break;

        case 83:
            keys.s = true;
            break;

        case 27:
            keys.escape = true;
            break;
			
        case 38:
            keys.up = true;
            break;
			
        case 40:
            keys.down = true;
            break;
			
        case 90:
            keys.z = true;
            break;

        case 70:
            keys.f = true;
            break;
        case 67:
            keys.c = true;
            break;
        case 86:
            keys.v = true;
            break;
        case 66:
            keys.b = true;
            break;
        case 84:
            keys.t = true;
            break;
    }
}

function onKeyUp(event) {

    var k = event.keyCode;

    switch (k) {
        case 68:
            keys.d = false;
            break;
            
         case 16:
            keys.shift = false;
            break;

        case 65:
            keys.a = false;
            break;
			
        case 81:
            keys.q = false;
            break;
			
       case 82:
            keys.r = false;
            break;

        case 32:
            keys.space = false;
            break;

        case 87:
            keys.w = false;
            break;

        case 83:
            keys.s = false;
            break;

        case 27:
            keys.escape = false;
            break;
			
        case 38:
            keys.up = false;
            break;
			
        case 40:
            keys.down = false;
            break;
			
        case 90:
            keys.z = false;
            break;
			
        case 70:
            keys.f = false;
            break;
        case 67:
            keys.c = false;
            break;
        case 86:
            keys.v = false;
            break;
        case 66:
            keys.b = false;
            break;
        case 84:
            keys.t = false;
            break;
    }
}

//setting up the canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//loading in all the images
window.addEventListener("keydown", onKeyDown, true);
window.addEventListener("keyup", onKeyUp, true);
window.addEventListener("mousedown", mouseDown, true);
window.addEventListener("mouseup", mouseUp, true);

    c.width = window.innerWidth-100;
    c.height = window.innerHeight-100;
    var cwidth = c.width;
    var cheight = c.height;
	var mouse = {
		x: 0,
		y: 0
	}
window.onmousemove = function (e) {
    var bbox = c.getBoundingClientRect();

    mouse.x = e.clientX - bbox.left * (c.width / bbox.width) + canvasTranslate.x-10;
    mouse.y = e.clientY - bbox.top * (c.height / bbox.height) + canvasTranslate.y-10;
}
//----------VARIABLES----------//
canvasTranslate = {
	x: 0,
	y: 0
}
mouse = {
	x: 0,
	y: 0
}
keys = {
	escape: false,
	mouseLeft: false,
	space: false,
	shift: false,
	w: false,
	a: false,
	d: false,
	s: false,
	q: false,
	r: false,
	up: false,
	down: false,
	z: false,
	f: false,
	b: false,
	t: false
}