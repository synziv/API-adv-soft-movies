import { Context, Env } from "hono";

export const getMovies = async (c: Context<Env, "/", {}>) => {
    return c.json({ name: "John Doe" });
};