import { userCreate, userDelete, userGet, userUpdate } from "./routes/user.ts";

import { welcome } from "./routes/welcome.ts";
import { Application, Router } from "./deps.ts";
import { getEmploymentTypes, getSectors } from "./routes/constants.ts";
import "https://deno.land/x/dotenv/load.ts";
import {envConfig} from './deps.ts'

envConfig();

const router = new Router();
const app = new Application();
const PORT = 8080;

router
  .get("/", welcome)
  .get("/constants/employmentTypes", getEmploymentTypes)
  .get("/constants/sectors", getSectors)
  .post("/user/create", userCreate);

app.use(router.routes());
app.use(router.allowedMethods());

console.log('Listening at port ' + PORT)
await app.listen({ port: PORT });
