import * as incomeRepo from "../repositories/income"
import log4js from "log4js";
const log = log4js.getLogger("service:income");
log.level = "debug";

export const addIncome = async (body: any) => {
  log.info("body:", body);
  const data = await incomeRepo.create(body);
  return data;
};

export const getIncomes = async (body: any) => {
  log.info("body:", body);
  const { limit, offset, filter } = body
  let data = await incomeRepo.findAll(limit, offset, filter);
  return data;
};

export const getIncome = async (id: number) => {
  log.info("id:", id);
  const data = await incomeRepo.findOne({ id });
  return data;
};

export const update = async (id: number, body: any) => {
  log.info(`id:${id} - body:${body}`);
  const data = await incomeRepo.update(id, body);
  return data;
};

export const destroy = async (id: number) => {
  log.info("id:", id);
  const data = await incomeRepo.destroy(id)
  return data;
};
