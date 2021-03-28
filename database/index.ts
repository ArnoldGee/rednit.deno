import { MongoClient } from "../deps.ts";

const client = new MongoClient();

const uri: string = Deno.env.get("MONGO_URI") as string;
console.log(uri);
await client.connect(uri);

export const db = client.database("test");
