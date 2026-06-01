import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.send([{"response" : "the node server boilerplate is ready."}]);
});

router.post("/:id", (req, res) => {
    res.send("id");
})

export default router;