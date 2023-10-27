import * as userRepo from "../repositories/user"
const log = require("log4js").getLogger("service:user");
log.level = "debug";

export const getAll = async (body: any) => {
    const { limit, offset, filter } = body
    let data = await userRepo.findAll(limit, offset, filter);
    return data;
};