import express from "express";
import dotenv from "dotenv";
import middleWares from "./middleware.js";
import testRouter from "./Routs/test.js";
import defaultRouter from "./default.js"
import { connectDB } from "./db.js";
dotenv.config();
const port = process.env.PORT || 4300;
const app = express();
const dev = !process.env.VERCEL;

middleWares(app);
connectDB().catch(console.dir);


app.use("/", defaultRouter);
app.use("/test", testRouter);

if(dev){
  app.listen(port, () => {
    console.log(`server started on port ${port}.`);
  });
}

export default app;
