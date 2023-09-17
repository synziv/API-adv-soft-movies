import { Hono } from "hono";
import { getUser, logOffUser } from "../controllers/userController";

export const userRouter = new Hono()

userRouter.get("/", async (c) => await getUser(c));

userRouter.post("/logoff", async (c) => await logOffUser(c));