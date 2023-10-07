import { Request, Response, NextFunction } from "express"
import asyncHandler from "express-async-handler"
import * as analyticService from "../services/analytic"
import log4js from "log4js";
const log = log4js.getLogger("controllers:analytic");
log.level = "info";


// * @route GET /api/v1/analytics
// @desc    get analaytics
// @access  public
export const getAnalytics = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const data = await analyticService.getAnalytic(req.body)
  res.status(200).json({ success: true, data });
});
