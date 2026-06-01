import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.resolve(__dirname, '../../public');

router.use(express.static(publicPath));

router.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

export default router;