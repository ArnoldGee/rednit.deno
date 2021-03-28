import { MongoDBConnector, Database } from "../deps.ts";
import "https://deno.land/x/dotenv/load.ts";
import {envConfig} from '../deps.ts'

const connector = new MongoDBConnector({
  uri: 'mongodb://127.0.0.1:27017',
  database: 'test',
});

const db = new Database(connector);