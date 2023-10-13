import { Context, Env } from "hono";

export const getMovies = async (c: Context<Env, "/", {}>) => {
    return c.json({ name: "John Doe" });
};

export const addToWishList = async (c: Context<Env, "/addToWishlist", {}>) => {
    const body =  await c.req.json();
    const movieId = body

    //TODO add movie to wishlist in firebase. If movie already exists, remove it from wishlist

    

    //added or removed
    return c.json({ status: "added" });
}