import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
dotenv.config();
const port = process.env.PORT || 4300;
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());


const uri = process.env.URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const run = async() => {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
} finally {
    // await client.close();
}}
run().catch(console.dir);

app.get("/mongodb", (req, res) => {
    res.send("mongodb");
})

if(process.env.MOOD === "dev"){
    app.listen(port, () => {
        console.log("server started in dev mood");
    });
}

export default app;