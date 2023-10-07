import express from "express"
import * as analyticController from "../../controllers/analytic"
const router = express.Router()

router.get("/analytics", analyticController.getAnalytics);

export default router
