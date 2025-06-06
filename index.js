const express = require('express');
const app = express();

app.use(express.json());

// Home Route
app.get('/home', (req, res) => {
  res.json({
    heading: 'Welcome to My Website',
    text: 'Join us to get the latest updates and features. Sign up today and be part of our community!'
  });
});

// About Route
app.get('/about', (req, res) => {
  res.json({
    title: 'About Us',
    content: 'This is the About Page. We are a company dedicated to bringing the best services to our customers.'
  });
});

// Contact Route
app.get('/contact', (req, res) => {
  res.json({
    title: 'Contact Us',
    content: 'Get in touch with us for any inquiries or support.'
  });
});

module.exports = app;
