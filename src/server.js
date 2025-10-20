const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello from CI/CD!'));
app.get('/health', (req, res) => res.status(200).json({status: 'ok'}));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
