import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import log4js from "log4js";
const log = log4js.getLogger("repository:income");
log.level = "info";

export const create = async (body: any) => {
  const data = await prisma.income.create({ data: body });
  return data
};

export const findAll = async (limit: number, offset: number, filter: any) => {
  const totalData = await prisma.income.count();
  const data = await prisma.income.findMany({
    skip: offset,
    take: limit,
    where: filter,
    include: {
      user: {
        select: {
          email: true,
        },
      },
      categories: {
        select: {
          tag: true
        }
      }
    },
  });
  let result = { totalData, data };
  return result;
};

export const findOne = async (filter: any) => {
  const data = await prisma.income.findUnique({ where: filter });
  return data;
};

export const update = async (id: number, body: any) => {
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