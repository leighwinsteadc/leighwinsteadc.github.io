var lineDrawing = anime({
	  targets: 'path',
	  strokeDashoffset: [anime.setDashoffset, 0],
	  easing: 'easeInOutSine',
	  duration: 5000,
	  delay: 50,
	  direction: 'alternate',
	  loop: false
	});

var defaultDuration = 777;
var edgeOffset = 0;
zenscroll.setup(defaultDuration, edgeOffset);

window.sr = ScrollReveal({duration: 900});
	sr.reveal('.aboutme');
	sr.reveal('.maintimeline');
	sr.reveal('.process');
	sr.reveal('.skills');
	sr.reveal('.portfolio');
	sr.reveal('.findme');
