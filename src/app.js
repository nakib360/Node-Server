import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url"; 
import middleWares from "./middleware.js";
import testRouter from "./Routs/test.js";
import { connectDB } from "./db.js";
dotenv.config();
const port = process.env.PORT || 4300;
const app = express();
const dev = !process.env.VERCEL;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

middleWares(app);
connectDB().catch(console.dir);

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

app.use("/test", testRouter);

if (dev) {
  app.listen(port, () => {
    console.log(`server started on port ${port}.`);
  });
}

export default app;