document.addEventListener('DOMContentLoaded', function() {
	let signUpButton = document.querySelector('.sign-up-btn');
	let formSection = document.querySelector('#form');

	signUpButton.addEventListener('click', function(event) {
		event.preventDefault();
		formSection.scrollIntoView({ behavior: 'smooth' });
	});
});