// A function to  validate the email
function validateEmail() {
	const emailInput = document.getElementById('email');
	const errorElement = document.getElementById('error');
	// condition for correct email format
	const emailFormat = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
	if (!emailFormat.test(emailInput.value)) {
		errorElement.textContent = 'Please enter a valif email address.'
		return false
	}
	errorElement.textContent = ' ';
	return true;
}
// Prevent form submission if email is not valid
const emailForm = document.getElementById('emailform');
emailForm.addEventListener('submit', function(event){
	if (!validateEmail()) {
		event.preventDefault();
	}
})
