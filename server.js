const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Express App! My name is yatrik');
});

app.get('/about', (req, res) => {
    res.send('This is a simple Express application. This is Practical 4');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
