function validateMobileNumber() {
    // Get the mobile number from input
    const mobileNumber = document.getElementById("mobileNumber").value;
    const errorMessage = document.getElementById("error-message");

    // Regular expression for validating mobile numbers (example: 10 digits, can be modified)
    const mobilePattern = /^[0-9]{10}$/;

    // Clear any previous error message
    errorMessage.textContent = '';

    // Validate if the input matches the pattern
    if (!mobilePattern.test(mobileNumber)) {
        errorMessage.textContent = 'Please enter a valid 10-digit mobile number.';
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}
