import { Router } from "express";
const router = Router();

router.get("/test", (req, res) => {
    res.send("the node server boilerplate is ready.");
});

export default router;