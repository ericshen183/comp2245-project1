/* Add your JavaScript to this file */
// Wait for the document to be ready
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the form
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        
        // Get the email address entered by the user
        const email = document.querySelector('#email').value;
        
        // Get the message div and display the thank you message
        const messageDiv = document.querySelector('.message');
        
        // Check if the email is not empty
        if (email) {
            messageDiv.innerHTML = `Thank you! Your email address <strong>${email}</strong> has been added to our mailing list!`;
        } else {
            messageDiv.innerHTML = `Please enter a valid email address.`;
        }

        // Optionally clear the input field after submitting
        document.querySelector('#email').value = '';
    });
});
