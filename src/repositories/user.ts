import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import log4js from "log4js";
const log = log4js.getLogger("repository:user");
log.level = "info";

export const create = async (body: any) => {
    const data = await prisma.user.create({ data: body });
    return data;
};

export const findAll = async (limit: number, offset: number, filter: any) => {
    const totalData = await prisma.user.count();
    const data = await prisma.user.findMany({
        skip: offset,
        take: limit,
        where: filter
    });
    const result = { totalData, data };
    return result;
};

export const findOne = async (filter: any) => {
    const data = await prisma.user.findUnique({
        where: filter
    })
    return data;
};
