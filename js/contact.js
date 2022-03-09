const backdrop = document.getElementById('backdrop');
const contactBtn = document.querySelector('.contact-btn');
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
