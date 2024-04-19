function htmlDecode(input) {
  	var doc = new DOMParser().parseFromString(input, "text/html");
  	return doc.documentElement.textContent;
}

function abstract(x){
	var arrow = document.getElementById("arrow_"+x);
	var body = document.getElementById("body_"+x);
	if(arrow.innerHTML == htmlDecode("&#9654;")){
		body.innerHTML = abstracts.get(x);
		arrow.innerHTML = "&#9660;";
	} else {
		arrow.innerHTML = "&#9654;";
		body.innerHTML = "";
	}
	MathJax.typeset();
	time();
}

function time(){
	var l = document.getElementById('line');
	var d = new Date(), dref = new Date();
	dref.setHours(9,0,0,0);
	var order = ["coffee1","giulio_b",	"stephane",	"coffee2",	"matthieu",	"florent", 	"lunch",	"zohar",	"song",	"coffee3",	"yue", "sueyeon",		"dinner"];
	var times = [9, 		9.5, 		10.25, 		11, 		11.5, 	    12.25, 		13, 		14.5, 		15.25,		15.75, 		16.5, 	 17.25,	     	20];
	if(order.length != times.length){
		alert("order length ("+order.length+") != times length ("+times.length+")");
	}
	if(d.getHours() >= 9 && d.getHours() < 22){
		var hrs = (d-dref)/1000/60/60;
		var slot = "";
		var i_ = -1;
		for(var i=1; i<order.length; i++){
			if(times[i] > hrs + 9){
				slot = order[i-1];
				i_ = i;
				break;
			}
		}
		// evil hacks to calibrate the line (hopefully it works in other browsers than chrome)
		var y_pos;
		if(hrs < 18 - 9){
			if(hrs >= 17.25 - 9){
				var elem = document.getElementById("td_sueyeon");
				var y_top = 5+elem.getBoundingClientRect().top - document.body.getBoundingClientRect().top,
				dy = elem.getBoundingClientRect().bottom - y_top  - document.body.getBoundingClientRect().top;
				y_pos = y_top + (hrs + 9 - 16.5) / 0.75 * dy; 
			} else {
				var elem = document.getElementById("td_"+slot);
				var y_top = elem.getBoundingClientRect().top - document.body.getBoundingClientRect().top,
					dy = elem.getBoundingClientRect().bottom - y_top  - document.body.getBoundingClientRect().top;
				y_pos = y_top + (hrs + 9 - times[i_-1]) / (times[i_] - times[i_-1]) * dy;
			}
		} else if(hrs < (20 - 9)) {
			var y_top = document.getElementById("td_sueyeon").getBoundingClientRect().bottom - document.body.getBoundingClientRect().top,
			    y_bottom = 5+document.getElementById("td_dinner").getBoundingClientRect().top - document.body.getBoundingClientRect().top;
			y_pos = y_top + (y_bottom - y_top) * ((hrs - (17.25 - 9)) / (20-17.25));
		} else  {
			var elem = document.getElementById("td_dinner");
			var y_top = 5+elem.getBoundingClientRect().top - document.body.getBoundingClientRect().top,
				dy = elem.getBoundingClientRect().bottom - y_top  - document.body.getBoundingClientRect().top;
			y_pos = y_top + (hrs + 9 - 20) / (22 - 20) * dy;
		}
		l.style.top = y_pos+"px";
		l.style.display="block";
	} else {
		l.style.display="none";
	}
}