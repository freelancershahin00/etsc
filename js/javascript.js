
					// datetime //

function datetime(){					
	document.getElementById("datetimeShow").innerHTML = Date();
	document.getElementById("datetimeShow").style.color = "green";
}
					
					// datetime //
					
					// stickyNav //
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('stickyNav').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('stickyNav').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 
					// end stickyNav //
					
					/***** reveal *****/
					
function reveal() {
	var reveals = document.querySelectorAll(".reveal");

	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = reveals[i].getBoundingClientRect().top;
		var elementVisible = 150;

		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("active");
		}
		else {
			reveals[i].classList.remove("active");
		}
	}
}
window.addEventListener("scroll", reveal);
					
					/***** end reveal *****/
					
					/***** auto typing *****/

var TxtRotate = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 8) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} 
	else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	}
	else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}

	setTimeout(function() {
		that.tick();
	}, delta);
};

window.onload = function() {
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i=0; i<elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-rotate');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtRotate(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".txt-rotate > .wrap { border-right: 3px solid #999 }";
	document.body.appendChild(css);
};

					/***** end auto typing *****/
