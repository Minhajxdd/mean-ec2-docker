import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

const client = new MongoClient(MONGO_URL);
let conn;
try {
  conn = await client.connect();
  console.log("connection To mongodb");
} catch (e) {
  console.error(e);
}
let db = conn.db("integration_ninjas");
export default db;
