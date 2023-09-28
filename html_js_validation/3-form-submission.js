// Function to handle form submission
function handleFormSubmit(event) {
	// Prevent the default form submission behavior
	event.preventDefault();
  
	// Retrieve form fields by their IDs
	const nameInput = document.getElementById("name");
	const emailInput = document.getElementById("email");
  
	// Retrieve the values entered in the form fields
	const nameValue = nameInput.value.trim();
	const emailValue = emailInput.value.trim();
  
	// Check if the "name" and "email" fields are empty
	if (nameValue === "" || emailValue === "") {
	  // Display an error message
	  const errorMessage = document.getElementById("error-message");
	  errorMessage.textContent = "Please fill in all required fields";
	  errorMessage.style.color = "red";
	} else {
	  // Clear any previous error messages
	  const errorMessage = document.getElementById("error-message");
	  errorMessage.textContent = "";
  
	  // Display a success message
	  const successMessage = document.getElementById("success-message");
	  successMessage.textContent = "Form submitted successfully!";
	  successMessage.style.color = "green";
  
	  // Here, you can choose to submit the form using AJAX or any other method if needed.
	  // For a simple demonstration, we won't submit the form here.
	}
  }
  
  // Add an event listener to the form element to listen for the "submit" event
  const submitForm = document.getElementById("submitForm");
  submitForm.addEventListener("submit", handleFormSubmit);
  