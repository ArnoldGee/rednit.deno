import { User } from './../model/User.ts';
import { RouterContext } from "../deps.ts";

export async function userCreate({request, response}: RouterContext) {
  try {
    const user: Pick<User, "name" | "email" | "password"> = await request.body().value;
    console.log(user)
    response.body = {
      message: "User created"
    }
  } catch(err) {
    throw(err)
  }
}
export const userGet = () => {}
export const userUpdate = () => {}
export const userDelete = () => {}
