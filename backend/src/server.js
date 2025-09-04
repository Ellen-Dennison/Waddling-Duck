const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the frontend/public folder
app.use(express.static(path.join(__dirname, '../public')));

// Example API endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Example POST endpoint
app.post('/auth/signin', (req, res) => {
    res.json({ email: 'helloworld.com' });
});

// Catch-all route for React Router (must come LAST)
app.get('/{*any}', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
