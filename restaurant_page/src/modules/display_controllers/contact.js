const contactDisplayController = (() => {
  const contactTitle = function() {
    const h2 = document.createElement('h2');
    h2.textContent = 'Contact Us';

    return h2;
  }

  const contactForm = function() {
    const form = document.createElement('form');
    const formFields = ['name', 'email', 'message'];

    formFields.forEach(field => {
      const label = document.createElement('label');
      const input = document.createElement('input');

      label.textContent = field[0].toUpperCase() + field.slice(1);
      label.for = field;
      input.id = field;
      input.name = 'contact';
      field === 'email' ? input.type = "email" : input.type = 'text';

      form.appendChild(label);
      form.appendChild(input);
    });

    const button = document.createElement('button');
    button.textContent = 'Submit';
    form.appendChild(button);

    return form;
  }

  const contact = function() {
    const main = document.createElement('main');
    main.id = 'main-contact';

    main.appendChild(contactTitle());
    main.appendChild(contactForm());

    return main;
  }

  return { contact }
})();

export default contactDisplayController.contact();
