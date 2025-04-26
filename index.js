const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors'); 
app.use(cors());

// Home Route
app.get('/home', (req, res) => {
  res.json({
    heading: 'Welcome to My Website',
    text: 'Join us to get the latest updates and features. Sign up today and be part of our community!'
  });
});

// About Route
app.get('/about', (req, res) => {
  // Ensure this is returning a JSON object
  res.json({
    title: 'About Us',  // Add key-value pairs
    content: 'This is the About Page. We are a company dedicated to bringing the best services to our customers.'
  });
});

// Contact Route
app.get('/contact', (req, res) => {
  // Ensure consistent response format (JSON)
  res.json({
    title: 'Contact Us',
    content: 'Get in touch with us for any inquiries or support.'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
