const request = require('supertest');
const app = require('../src/app');

describe('Basic API endpoints', () => {
  test('GET /api/hello', async () => {
    const res = await request(app).get('/api/hello').expect(200);
    expect(res.body).toEqual({ message: 'Hello from CI' });
  });

  test('GET /health', async () => {
    const res = await request(app).get('/health').expect(200);
    expect(res.text).toBe('OK');
  });

  test('GET /api/hello should have correct headers', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.headers['content-type']).toMatch(/json/);
  });

  test('GET /nonexistent should return 404', async () => {
    await request(app).get('/nonexistent').expect(404);
  });
});

describe('API Response Structure', () => {
  test('/api/hello response should have message property', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.body).toHaveProperty('message');
    expect(typeof res.body.message).toBe('string');
  });

  test('/health should return simple text response', async () => {
    const res = await request(app).get('/health');
    expect(res.text).toBe('OK');
    expect(res.status).toBe(200);
  });
});
