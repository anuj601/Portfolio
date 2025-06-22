document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    // Show error message
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        
        errorMessage.textContent = message;
        errorMessage.classList.add('show');
        input.style.borderColor = '#ff4d4d';
    }
    
    // Remove error message
    function removeError(input) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        
        errorMessage.textContent = '';
        errorMessage.classList.remove('show');
        input.style.borderColor = 'rgba(108, 99, 255, 0.3)';
    }
    
    // Validate name
    function validateName() {
        const nameValue = nameInput.value.trim();
        
        if (nameValue === '') {
            showError(nameInput, 'Name is required');
            return false;
        } else if (nameValue.length < 3) {
            showError(nameInput, 'Name must be at least 3 characters');
            return false;
        } else {
            removeError(nameInput);
            return true;
        }
    }
    
    // Validate email
    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailValue === '') {
            showError(emailInput, 'Email is required');
            return false;
        } else if (!emailRegex.test(emailValue)) {
            showError(emailInput, 'Please enter a valid email');
            return false;
        } else {
            removeError(emailInput);
            return true;
        }
    }
    
    // Validate subject
    function validateSubject() {
        const subjectValue = subjectInput.value.trim();
        
        if (subjectValue === '') {
            showError(subjectInput, 'Subject is required');
            return false;
        } else if (subjectValue.length < 5) {
            showError(subjectInput, 'Subject must be at least 5 characters');
            return false;
        } else {
            removeError(subjectInput);
            return true;
        }
    }
    
    // Validate message
    function validateMessage() {
        const messageValue = messageInput.value.trim();
        
        if (messageValue === '') {
            showError(messageInput, 'Message is required');
            return false;
        } else if (messageValue.length < 10) {
            showError(messageInput, 'Message must be at least 10 characters');
            return false;
        } else {
            removeError(messageInput);
            return true;
        }
    }
    
    // Event listeners for real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    subjectInput.addEventListener('input', validateSubject);
    messageInput.addEventListener('input', validateMessage);
    
    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();
        
        if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
            // Form is valid - you can send data to server here
            alert('Form submitted successfully!');
            form.reset();
            
            // Reset labels position
            document.querySelectorAll('.form-group label').forEach(label => {
                label.style.top = '15px';
                label.style.fontSize = '1rem';
            });
        }
    });
});