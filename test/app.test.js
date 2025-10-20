const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON bodies
app.use(express.json());

// 1. Root Route
app.get('/', (req, res) => {
  // Console log removed from here to prevent log spam during tests
  res.status(200).send('Hello from CI/CD!');
});

// 2. Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// IMPORTANT FIX:
// 1. Export the 'app' instance so supertest can use it.
// 2. Do NOT call app.listen() here. app.listen() should only be called when running the application for real.
module.exports = app;

// Optionally, you can create a separate file (e.g., 'index.js')
// to run the server, or use this check for local execution:
if (require.main === module) {
  // This block runs only when the file is executed directly (e.g., node src/server.js)
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
