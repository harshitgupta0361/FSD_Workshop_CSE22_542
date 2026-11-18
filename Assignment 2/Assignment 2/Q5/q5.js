const express = require('express');

const app = express();

// Home Page
app.get('/', (req, res) => {
    res.send(`
        <h1>Sweet Bakery</h1>
        <h2>Welcome to Sweet Bakery!</h2>
        <p>We serve fresh and delicious bakery items.</p>
    `);
});

// Menu Page
app.get('/menu', (req, res) => {
    res.send(`
        <h1>Our Bakery Menu</h1>
        <ul>
            <li>Chocolate Cake</li>
            <li>Black Forest Cake</li>
            <li>Vanilla Pastry</li>
            <li>Chocolate Cookies</li>
            <li>Fresh Bread</li>
        </ul>
    `);
});

// Contact Page
app.get('/contact', (req, res) => {
    res.send(`
        <h1>Contact Us</h1>
        <p>Phone: 9876543210</p>
        <p>Address: Ghaziabad, Uttar Pradesh, India</p>
    `);
});

// Start Server
app.listen(3000, () => {
    console.log("Bakery Website running at http://localhost:3000");
});