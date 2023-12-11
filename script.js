function myFunction() {
    document.getElementById("contactForm").submit();
  }
  document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
  
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Add your form submission logic here (e.g., sending data to a server)
      // For simplicity, let's just log the form data to the console
      const formData = new FormData(contactForm);
      for (const [name, value] of formData) {
        console.log(`${name}: ${value}`);
      }
  
      // Optionally, you can add logic to clear the form fields after submission
      contactForm.reset();
    });
  });