const request = require("supertest");
const application = require("./app");

describe('sum module', () => {
  test('renders the app route', async () => {
    const response = await request(application).get("/");
    expect(response).toBeDefined();
  });
});