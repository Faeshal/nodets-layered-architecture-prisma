import * as incomeRepo from "../repositories/income"
const log = require("log4js").getLogger("service:income");
log.level = "debug";

export const add = async (body: any) => {
  log.info("body:", body);
  const data = await incomeRepo.add(body);
  return data;
};

export const getAll = async (body: any) => {
  log.info("body:", body);
  let data = await incomeRepo.getAll(body);
  return data;
};

export const getById = async (id: number) => {
  log.info("id:", id);
  const data = await incomeRepo.getById(id);
  return data;
};

export const update = async (body: any, id: number) => {
  log.info("body:", body, "- id:", id);
  const data = await incomeRepo.update(body, id);
  return data;
};

export const destroy = async (id: number) => {
  log.info("id:", id);
  const data = await incomeRepo.destroy(id)
  return data;
};
