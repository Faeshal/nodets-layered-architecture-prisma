import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import log4js from "log4js";
const log = log4js.getLogger("repository:category");
log.level = "info";

export const create = async (body: any) => {
    const data = await prisma.category.create({ data: body });
    return data;
};

export const findAll = async (limit: number, offset: number, filter: any) => {
    const totalData = await prisma.category.count();
    const data = await prisma.category.findMany({
        skip: offset,
        take: limit,
        where: filter
    });
    const result = { totalData, data };
    return result;
};
