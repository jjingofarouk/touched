
// formValidation.js

// General form validation function
function validateForm(form) {
  let isValid = true;

  // Name validation (non-empty)
  const name = form.querySelector('input[name="name"]');
  if (!name.value.trim()) {
    showError(name, 'Name is required.');
    isValid = false;
  } else {
    clearError(name);
  }

  // Email validation (non-empty and valid email format)
  const email = form.querySelector('input[name="email"]');
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email.value.trim()) {
    showError(email, 'Email is required.');
    isValid = false;
  } else if (!emailRegex.test(email.value)) {
    showError(email, 'Please enter a valid email address.');
    isValid = false;
  } else {
    clearError(email);
  }

  // Donation Amount validation (if it's a donation page)
  const amount = form.querySelector('input[name="amount"]');
  if (amount) { // Only validate if there's an amount field
    if (!amount.value.trim() || parseFloat(amount.value) <= 0) {
      showError(amount, 'Please enter a valid donation amount.');
      isValid = false;
    } else {
      clearError(amount);
    }
  }

  // Custom donation amount validation (if present)
  const customAmount = form.querySelector('input[name="custom-amount"]');
  if (customAmount) {
    if (customAmount.value.trim() && parseFloat(customAmount.value) <= 0) {
      showError(customAmount, 'Custom amount should be greater than zero.');
      isValid = false;
    } else {
      clearError(customAmount);
    }
  }

  // Payment method validation (non-empty)
  const paymentMethod = form.querySelector('select[name="payment-method"]');
  if (!paymentMethod.value) {
    showError(paymentMethod, 'Please select a payment method.');
    isValid = false;
  } else {
    clearError(paymentMethod);
  }

  return isValid;
}

// Show error message next to the field
function showError(input, message) {
  let errorElement = input.nextElementSibling;
  if (!errorElement || !errorElement.classList.contains('error-message')) {
    errorElement = document.createElement('div');
    errorElement.classList.add('error-message');
    input.parentNode.insertBefore(errorElement, input.nextSibling);
  }
  errorElement.textContent = message;
  input.classList.add('error');
}

// Clear error message
function clearError(input) {
  let errorElement = input.nextElementSibling;
  if (errorElement && errorElement.classList.contains('error-message')) {
    errorElement.remove();
  }
  input.classList.remove('error');
}

// Attach the validation to form submission
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (validateForm(form)) {
        // Handle form submission if valid
        // Example: Redirect on donation form success
        if (form.id === 'donation-form') {
          window.location.href = 'success.html';
        } else {
          form.submit(); // For general forms, submit normally
        }
      }
    });
  });
});
