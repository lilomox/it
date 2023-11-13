let options = {
	root: null,
	rootMargin: '5px',
	threshold: 0.5
}

let callback = function(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			console.log('find', entry);
			entry.target.classList.add('active');
		}
	});
}

let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.text_header2')
targets.forEach(target => {
	observer.observe(target);
});

let targets2 = document.querySelectorAll('.text_header3')
targets2.forEach(target => {
	observer.observe(target);
});

let targets3 = document.querySelectorAll('.text_header4')
targets3.forEach(target => {
	observer.observe(target);
});

var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  this.classList.add("active");
});