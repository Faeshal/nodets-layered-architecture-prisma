import express from "express"
const router = express.Router()
import incomeRoute from "./income"
import userRoute from "./user"
import categoryRoute from "./category"

router.use("/", incomeRoute);
router.use("/", userRoute);
router.use("/", categoryRoute);

export default router;