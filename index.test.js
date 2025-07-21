// index.test.js
const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('should respond with Hello, CI/CD World!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, CI/CD World!');
  });
});

describe('GET /health', () => {
  it('should respond with status UP', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('UP');
  });
});