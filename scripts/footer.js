function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  

  const emailInput = document.querySelector('input[name="email"]');

  emailInput.addEventListener('input', function(event) {
    const email = event.target.value;
    if (validateEmail(email)) {
      emailInput.style.color = '';
    } else {
      emailInput.style.color = 'red';
    }
  });