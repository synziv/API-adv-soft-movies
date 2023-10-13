import { Hono } from "hono";
import { addToWishList, getMovies } from "../controllers/moviesController";

export const moviesRouter = new Hono()

moviesRouter.get("/", getMovies)
moviesRouter.post("/addToWishlist",addToWishList);