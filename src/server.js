const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON bodies
app.use(express.json());

// 1. Root Route
app.get('/', (req, res) => {
  res.status(200).send('Hello from CI/CD!');
});

// 2. Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// The FIX: Export the raw Express application instance for testing.
// This allows 'supertest' to manage the server lifecycle internally.
module.exports = app;

// Start the server only if the file is run directly (i.e., not imported as a module for testing).
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}