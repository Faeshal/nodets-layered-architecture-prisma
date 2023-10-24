import * as userRepo from "../repositories/user"
const log = require("log4js").getLogger("service:user");
log.level = "debug";

export const add = async (body: any) => {
    log.info("body:", body);
    const data = await userRepo.create(body);
    return data;
};

export const getAll = async (body: any) => {
    log.info("body:", body);
    let data = await userRepo.findAll(body);
    return data;
};