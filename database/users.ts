import { User } from './../model/User.ts';
import { db } from './index.ts'

export const users = db.collection<User>("users")
