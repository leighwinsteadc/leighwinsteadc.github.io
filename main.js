var lineDrawing = anime({
	  targets: 'path',
	  strokeDashoffset: [anime.setDashoffset, 0],
	  easing: 'easeInOutSine',
	  duration: 5000,
	  delay: 500,
	  direction: 'alternate',
	  loop: false
	});


window.sr = ScrollReveal({duration: 2000});
	sr.reveal('.aboutme');
	sr.reveal('.maintimeline');
	sr.reveal('.process');
	sr.reveal('.skills');
	sr.reveal('.portfolio');
	sr.reveal('.findme');
