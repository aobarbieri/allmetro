const backdrop = document.getElementById('backdrop');
const contactBtn = document.querySelector('.contact-btn');
const ftrContactBtn = document.querySelector('.ftr-contact-btn');
const showModal = document.getElementById('add-modal');

/* Backdrop and Contact Modal */
const toggleBackdrop = () => {
	backdrop.classList.toggle('visible');
};

const showContactModal = () => {
	showModal.classList.add('visible');
	toggleBackdrop();
};

const backdropClickHandler = () => {
	showModal.classList.remove('visible');
	toggleBackdrop();
};

backdrop.addEventListener('click', backdropClickHandler);
contactBtn.addEventListener('click', showContactModal);
ftrContactBtn.addEventListener('click', showContactModal);

//Contact form submission
window.addEventListener('DOMContentLoaded', function () {
	// get the form elements defined in your form HTML above
	let form = document.getElementById('form');
	// let status = document.getElementById('status');

	// Success and Error functions for after the form is submitted
	function success() {
		form.reset();
		alert('Enviado!');
		// status.classList.add('success');
		// status.innerHTML = 'Success!';
	}

	function error() {
		alert('Oops! Alguma coisa deu errado.');
		// status.classList.add('error');
		// status.innerHTML = 'Oops! Something went wrong.';
	}

	// handle the form submission event
	async function handleSubmit(event) {
		event.preventDefault();
		let data = new FormData(event.target);
		fetch(event.target.action, {
			method: form.method,
			body: data,
			headers: {
				Accept: 'application/json',
			},
		})
			.then((res) => {
				success();
			})
			.catch((er) => {
				error();
				console.log(er);
			});
	}
	form.addEventListener('submit', handleSubmit);
});
