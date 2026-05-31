import dotenv from "dotenv";
dotenv.config();
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.URI;

const client = uri ? new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
}) : null;

export const connectDB = async() => {
  if(!uri || !client){
    console.log("MongoDB URI not found in .env file.\nskipping database connection.\nAdd URI to your .env file to enable MongoDB.");
    return
  }
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
} finally {
    // await client.close();
}}

export {client};