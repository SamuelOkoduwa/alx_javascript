 // Function to generate input fields
 function generateInputFields(numFields) {
	const inputContainer = document.getElementById('inputContainer');
	inputContainer.innerHTML = ''; // Clear previous input fields

	for (let i = 1; i <= numFields; i++) {
		const input = document.createElement('input');
		input.type = 'text';
		input.name = `field${i}`;
		input.placeholder = `Field ${i}`;
		inputContainer.appendChild(input);
	}
}

// Function to validate the form
function validateForm(event) {
	event.preventDefault(); // To  Prevent form submission

	const inputs = document.querySelectorAll('input[name^="field"]');
	let isValid = true;

	inputs.forEach(input => {
		if (input.value.trim() === '') {
			isValid = false;
		}
	});

	if (isValid) {
		document.getElementById('errorMessage').textContent = '';
		// Submit the form if all fields are filled
		document.getElementById('dynamicForm').submit();
	} else {
		document.getElementById('errorMessage').textContent = 'Please fill in all fields';
	}
}

// Event listener to dynamically generate input fields when the dropdown changes
document.getElementById('numFields').addEventListener('change', function () {
	const numFields = parseInt(this.value, 10);
	generateInputFields(numFields);
});

// Event listener to validate the form when submitted
document.getElementById('dynamicForm').addEventListener('submit', validateForm);

// Initialize with one input field
generateInputFields(1);
