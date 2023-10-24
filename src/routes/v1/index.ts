import express from "express"
const router = express.Router()
import incomeRoute from "./income"

router.use("/", incomeRoute);

export default router;