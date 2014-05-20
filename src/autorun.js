onload = function() {

var e, i = 0;
while (e = document.getElementById('gallery').getElementsByTagName ('li') [i++]) {
	e.onmouseover = function () {
		clearTimeout(t);
		}
	e.onmouseout = function () {
			t=setTimeout("timedCount()",timeOut);
		}	
	}
}

c=0;
timeOut = 4000;
var t;
t=setTimeout("timedCount()",timeOut);

function timedCount() {
var getImage = document.getElementById('showcaseindex').getElementsByTagName('li');
img = getImage.length-1;
	for (var a=0; a<getImage.length; a++) {
		if (getImage[a].className.indexOf("current") == 0) {
				getImage[a].className = '';
				c = a;
		}
	}
	c++;
	if (c>img) {c=0;}
	getImage[c].className = 'current';
	t=setTimeout("timedCount()",timeOut);
}
// JavaScript Document