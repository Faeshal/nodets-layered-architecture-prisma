import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import log4js from "log4js";
const log = log4js.getLogger("repository:analytic");
log.level = "info";

export const getAnaytics = async () => {
    let data = await prisma.income.findMany()
    return data
};


