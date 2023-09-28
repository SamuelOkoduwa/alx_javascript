// function to validate password
function validatePassword(password) {
	// The regular expressions for the conditions
	const minLength = 8;
	const upperCase = /[A-Z]/;
	const lowerCase = /[a-z]/;
	const numDigit = /[0-9]/;
	const specialCharacter = /[!@#$%^&*]/;
	// application of the conditions
	if ((password.length >= minLength) && upperCase.test(password) &&
		lowerCase.test(password) && numDigit.test(password) && specialCharacter.test(password)) {
			return true;
		} else {
			return false;
		}	
}
// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    const passwordInput = document.getElementById("password");
    const errorElement = document.getElementById("error");

    const password = passwordInput.value;


    // Validate the password
    if (validatePassword(password)) {
        // Password is valid, submit the form
        errorElement.textContent = ""; // Clear any previous error message
        document.getElementById("passwordForm").submit();
    } else {
        // Password is invalid, display an error message
        errorElement.textContent =
		'Password does not meet the criteria.';
    }
}
document.getElementById("passwordForm").addEventListener("submit", handleSubmit);



/* The second Option*/
// // Function to validate the password strength
// function validatePassword(password) {
//     // Define regular expressions for each criteria
//     const minLengthRegex = /^.{8,}$/;
//     const uppercaseRegex = /[A-Z]/;
//     const lowercaseRegex = /[a-z]/;
//     const digitRegex = /\d/;
//     const specialCharRegex = /[!@#$%^&*]/;

//     // Check each criteria
//     const isMinLengthValid = minLengthRegex.test(password);
//     const isUppercaseValid = uppercaseRegex.test(password);
//     const isLowercaseValid = lowercaseRegex.test(password);
//     const isDigitValid = digitRegex.test(password);
//     const isSpecialCharValid = specialCharRegex.test(password);

//     // Check if all criteria are met
//     return (
//         isMinLengthValid &&
//         isUppercaseValid &&
//         isLowercaseValid &&
//         isDigitValid &&
//         isSpecialCharValid
//     );
// }

// // Event listener for form submission
// document.getElementById('passwordForm').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent form submission

//     // Retrieve the password value
//     const password = document.getElementById('password').value;

//     // Validate the password
//     if (validatePassword(password)) {
//         document.getElementById('error').textContent = ''; // Clear error message
//         // Allow form submission
//         this.submit();
//     } else {
//         document.getElementById('error').textContent =
//             'Password does not meet the criteria.';
//     }
// });


/* THE THIRD OPTION*/

// document.addEventListener('DOMContentLoaded', function () {
//     const passwordForm = document.getElementById('passwordForm');
//     const passwordInput = document.getElementById('password');
//     const errorElement = document.getElementById('error');

//     passwordForm.addEventListener('submit', function (event) {
//         event.preventDefault(); // Prevent form submission

//         const password = passwordInput.value;
//         const isPasswordValid = validatePassword(password);

//         if (isPasswordValid) {
//             errorElement.textContent = ''; // Clear any previous error messages
//             // Allow form submission
//             passwordForm.submit();
//         } else {
//             errorElement.textContent = 'Password does not meet the criteria.';
//         }
//     });

//     function validatePassword(password) {
//         // Password must be at least 8 characters long
//         if (password.length < 8) {
//             return false;
//         }

//         // Check for at least one uppercase letter
//         if (!/[A-Z]/.test(password)) {
//             return false;
//         }

//         // Check for at least one lowercase letter
//         if (!/[a-z]/.test(password)) {
//             return false;
//         }

//         // Check for at least one numeric digit
//         if (!/\d/.test(password)) {
//             return false;
//         }

//         // Check for at least one special character
//         if (!/[!@#$%^&*]/.test(password)) {
//             return false;
//         }

//         return true; // Password meets all criteria
//     }
// });
