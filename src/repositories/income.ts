import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { paginate } from "../utils/paginate";
import log4js from "log4js";
const log = log4js.getLogger("repository:income");
log.level = "info";

export const add = async (body: any) => {
  const data = await prisma.income.create({ data: body });
  return data;
};

export const getAll = async (body: any) => {
  const { offset, req, orderBy } = body;

  const totalData = await prisma.income.count();
  const data = await prisma.income.findMany({
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

export const getById = async (id: number) => {
  const data = await prisma.income.findUnique({ where: { id } });
  return data;
};

export const update = async (body: any, id: number) => {
  const data = await prisma.income.update({
    where: { id },
    data: body,
  });
  return data;
};

export const destroy = async (id: number) => {
  const data = await prisma.income.delete({ where: { id } });
  return data;
};