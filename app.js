// app.js

const express = require('express');
const app = express();

// Set up the middleware to parse JSON requests
app.use(express.json());

// Home route: Get request to the root
app.get('/', (req, res) => {
    res.send('Welcome to my Node.js app Server1!');
});

// Simple API route: Get user details
app.get('/api/user', (req, res) => {
    const user = {
        id: 'Server1',
        name: 'Prasertsak server1',
        email: 'test@example.com',
    };
    res.json(user);
});

// POST route to create a new user
app.post('/api/user', (req, res) => {
    const newUser = req.body; // User data from the request body
    res.status(201).json({
        message: 'User created successfully',
        user: newUser,
    });
});

// 404 route if no matching route is found
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
