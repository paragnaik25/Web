document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simple form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Thank you for your message!');
        // Here you can add code to actually send the form data, e.g., via AJAX
    }
});
