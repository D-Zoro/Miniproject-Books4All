document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    if (loginForm) {
      loginForm.addEventListener('submit', (event) => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
  
        // Custom validation if needed
        if (!email) {
          event.preventDefault();
          alert('Email missing');
        }
        if (!password) {
            event.preventDefault();
            alert('Enter password');
          }
      });
    }
});