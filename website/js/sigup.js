document.addEventListener('DOMContentLoaded', () => {
   
  
    const signUpForm = document.querySelector('form');
    if (signUpForm) {
      signUpForm.addEventListener('submit', (event) => {
        const firstName = document.getElementById('first_name').value;
        const phoneNo = document.getElementById('phone_no').value;
        const email = document.getElementById('floatingInput').value;
        const password = document.getElementById('floatingPassword').value;
  
        // Custom validation
        if (!firstName || !phoneNo || !email || !password) {
          event.preventDefault();
          alert('Please fill in all fields.');
        }
        phoneNo.addEventListener('invalid',()=>{
          phoneNo.setCustomValidity('enter vaild number');
        })
        email.addEventListener('invalid',()=>{
          email.setCustomValidity('Enter valid email');
        })
      });
    }
  });
  