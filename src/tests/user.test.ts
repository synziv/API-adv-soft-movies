import { expect, test, describe } from "bun:test";
import { app } from "..";

//this test is an exemple of how to test a route
//it should be modified when we have the logoff route implemented
describe("User testing", () => {
  test("POST /user/logoff", async () => {
    const user = "John Doe";
    const req = new Request("http://localhost/user/logoff", {
      method: "POST",
      body: JSON.stringify({ data: { user: user } }),
    });
    const res = await app.request(req);
    expect(res.status).toBe(200);
    expect(await res.text()).toBe(`User ${user} logged off from backend`);
  });
});