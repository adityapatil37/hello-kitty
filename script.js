// Add interaction to buttons
const buttons = document.querySelectorAll('.alert');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Button clicked! More features coming soon.');
  });
});


// Contact form submission simulation
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for reaching out! We’ll get back to you soon.');
  form.reset();
});
