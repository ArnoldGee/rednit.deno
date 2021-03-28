import { RouterContext } from "../deps.ts";

export const welcome = (ctx: RouterContext) => {
  ctx.response.body = "Welcome to the Ultra 85 Rednit program";
}
