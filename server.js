const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like HTML and CSS) from the 'public' directory
app.use(express.static('public'));

// Handle form submissions
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Here you can add logic to handle the form data (e.g., save it to a database)
  // For simplicity, let's just log the data to the console
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  // You can send a response back to the client if needed
  res.send('Form submission successful!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Prints a log once the server starts listening
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});