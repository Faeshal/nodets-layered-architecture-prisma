import express from "express"
const router = express.Router()
import incomeRoute from "./income"
import anaylticRoute from "./analytic"

router.use("/", incomeRoute);
router.use("/", anaylticRoute);

export default router;