import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { paginate } from "../utils/paginate";
import log4js from "log4js";
const log = log4js.getLogger("repository:category");
log.level = "info";

export const create = async (body: any) => {
    const data = await prisma.category.create({ data: body });
    return data;
};

export const findAll = async (body: any) => {
    const { offset, req, orderBy } = body;

    const totalData = await prisma.category.count();
    const data = await prisma.category.findMany({
        skip: offset,
        take: req.query.limit,
        orderBy,
    });

    const pagin = await paginate({
        length: totalData,
        limit: req.query.limit,
        page: req.query.page,
        req,
    });
    let result = { pagin, totalData, data };

    return result;
};
