import asyncHandler from "express-async-handler";
import * as categoryService from "../services/category"
import { validationResult } from "express-validator";
import { ErrorResponse } from "../middleware/errorHandler";
import log4js from "log4js";
const log = log4js.getLogger("controllers:category");
log.level = "info";


// * @route GET /api/v1/categories
// @desc    get categories
// @access  public
export const getCategories = asyncHandler(async (req, res, next) => {
    const data = await categoryService.getAll({
        limit: req.query.limit,
        offset: req.skip,
        order: [["createdAt", "DESC"]],
        req,
    });
    res.status(200).json(data)
});

// * @route POST /api/v1/categories
// @desc    add new categories
// @access  public
export const addCategory = asyncHandler(async (req, res, next) => {
    log.info("body:", req.body);
    // *Express Validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
            new ErrorResponse(errors.array({ onlyFirstError: true })[0].msg, 400)
        );
    }
    await categoryService.add(req.body);
    res.status(201).json({ success: true, message: "category create" });
});