const express = require("express");

const app = express();


// Home page
app.get("/", (req, res) => {

    res.send(`
        <html>
        <head>
            <title>Sweet Bakery</title>
        </head>

        <body>
            <h1>Welcome to Sweet Bakery</h1>

            <p>Fresh and delicious bakery items!</p>

            <a href="/menu">Menu</a>
            <br>
            <a href="/contact">Contact</a>
        </body>
        </html>
    `);
});


// Menu page
app.get("/menu", (req, res) => {

    res.send(`
        <html>
        <head>
            <title>Bakery Menu</title>
        </head>

        <body>

            <h1>Our Menu</h1>

            <ul>
                <li>Chocolate Cake - ₹500</li>
                <li>Vanilla Cake - ₹450</li>
                <li>Black Forest Cake - ₹600</li>
                <li>Chocolate Pastry - ₹80</li>
                <li>Strawberry Pastry - ₹90</li>
            </ul>

            <a href="/">Home</a>
            <br>
            <a href="/contact">Contact</a>

        </body>
        </html>
    `);
});


// Contact page
app.get("/contact", (req, res) => {

    res.send(`
        <html>
        <head>
            <title>Contact</title>
        </head>

        <body>

            <h1>Contact Sweet Bakery</h1>

            <p>Phone: 9876543210</p>

            <p>
                Address: Main Market, Ghaziabad,
                Uttar Pradesh
            </p>

            <a href="/">Home</a>
            <br>
            <a href="/menu">Menu</a>

        </body>
        </html>
    `);
});


// Start server
app.listen(3000, () => {
    console.log("Bakery server running on port 3001");
});