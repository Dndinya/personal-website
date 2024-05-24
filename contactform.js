document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('sXZ2DQxhvfwJ_3dKo'); // Initialize EmailJS with your User ID
  
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Collect form data
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var subject = document.getElementById('subject').value;
      var message = document.getElementById('message').value;
      
      // Prepare email params
      var templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      };
  
      // Send email using EmailJS
      emailjs.send('service_hgvkwlo', 'template_i01tnxl', templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
        }, function(error) {
          console.log('FAILED...', error);
          alert('Failed to send message. Please try again later.');
        });
    });
  });
  
   
