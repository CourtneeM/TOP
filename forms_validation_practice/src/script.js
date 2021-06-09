const inputs = [...document.querySelectorAll('input')];
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', () => {
  let passwordInput;

  inputs.forEach(input => {
    if (input.id === 'password') passwordInput = input;

    if (!input.checkValidity()) {
      input.classList.add('invalid');
    }

    if (input.id === "password-confirm") {
      if (input.value !== passwordInput.value) {
        console.log(passwordInput.value, input.value)
        input.setCustomValidity("Passwords don't match!");
      } else {
        input.setCustomValidity('');
      }
    }
  });
});
