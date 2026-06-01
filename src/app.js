import express from "express";
import dotenv from "dotenv";
import terminalLink from "terminal-link";
import middleWares from "./middleware.js";
import testRouter from "./Routs/test.js"
import { connectDB } from "./db.js";
dotenv.config();
const port = process.env.PORT || 4300;
const app = express();
const dev = !process.env.VERCEL;

middleWares(app);
connectDB().catch(console.dir);

app.use("/test", testRouter);

if(dev){
  app.listen(port, () => {
    const url = `http://localhost:${port}`;
    const clickable = terminalLink(url, url);
    console.log(`server started in dev mood.\nctrl + click ${clickable}`);
  });
}

export default app;
