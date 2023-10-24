import asyncHandler from "express-async-handler";
import * as categoryService from "../services/category"
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
    await categoryService.add(req.body);
    res.status(201).json({ success: true, message: "category create" });
});