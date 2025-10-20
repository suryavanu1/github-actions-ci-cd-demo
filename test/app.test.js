const request = require('supertest');
// Import both the app (Express instance) and the actual server instance
// The server instance is what we need to close.
const { app, server } = require('../src/server');

describe('App basic routes', () => {

  // --- FIX: Add afterAll hook to close the server ---
  // This hook ensures that the server process is explicitly terminated
  // after all tests in this suite are finished. This resolves the "Jest did not exit" warning.
  afterAll(done => {
    // Check if the server object exists and has a close method
    if (server && typeof server.close === 'function') {
      console.log('Closing HTTP server...');
      server.close(() => {
        console.log('HTTP server closed.');
        done(); // Jest continues once the server is fully closed
      });
    } else {
        done(); // Proceed if server object isn't available
    }
  });
  // ----------------------------------------------------

  it('GET / should return greeting', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    // Ensure the greeting is correct, handling potential / in regex
    expect(res.text).toMatch(/Hello from CI\/CD!/);
  });

  it('GET /health should return ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    // Note: supertest parses JSON for non-text responses automatically into res.body
    expect(res.body).toEqual({ status: 'ok' });
  });
});
