import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { moviesRouter } from './routes/movies';
import { cors } from 'hono/cors'

export const app = new Hono();

app.use('/*', cors())

app.route("/user", userRouter);
app.route("/movies", moviesRouter);


app.notFound((c) => c.json({ message: 'Not Found', ok: false }, 404))

export default {
    port: 4000,
    fetch: app.fetch
  };

