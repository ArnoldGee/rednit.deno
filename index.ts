
import { Application, Router, RouterContext } from "https://deno.land/x/oak/mod.ts";

const router = new Router()
const app    = new Application();
const PORT   = 8080;

router.get('/', (ctx: RouterContext) => {
  ctx.response.body = "Hello World"
})

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: PORT });