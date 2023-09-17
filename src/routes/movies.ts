import { Hono } from "hono";
import { getMovies } from "../controllers/moviesController";

export const moviesRouter = new Hono()

moviesRouter.get("/", getMovies)