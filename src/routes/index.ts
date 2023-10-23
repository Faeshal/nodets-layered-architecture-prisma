import express from "express"
const router = express.Router()
import v1Route from "../routes/v1"

router.use("/api/v1", v1Route);

router.get("/", (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: "welcome to the Express API" });
});

export default router;