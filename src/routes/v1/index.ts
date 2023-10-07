import express from "express"
const router = express.Router()

router.use("/", require("./income"));
router.use("/", require("./analytic"));

export default router;
