import asyncHandler from "express-async-handler";
import * as userService from "../services/user"
import log4js from "log4js";
const log = log4js.getLogger("controllers:user");
log.level = "info";

// * @route GET /api/v1/users
// @desc    get users
// @access  public
export const getUsers = asyncHandler(async (req, res, next) => {
    const data = await userService.getAll({
        limit: req.query.limit,
        offset: req.skip,
        order: [["createdAt", "DESC"]],
        req,
    });
    res.status(200).json(data)
});