import { Context, Env } from "hono";

export const getUser = async (c:Context<Env, "/", {}>) => {
    return c.json({ name: "John Doe" });
};

export const logOffUser = async (c:Context<Env, "/", {}>) => {
    const body =  await c.req.json();
    const user = body.data.user;

    return c.text(`User ${user} logged off from backend`);
}
