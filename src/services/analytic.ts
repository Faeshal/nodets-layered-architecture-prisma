import * as analyticRepo from "../repositories/analytic"
import log4js from "log4js";
const log = log4js.getLogger("service:analytic");
log.level = "info";


export const getAnalytic = async (body: any) => {
  log.info("body:", body);
  const data = await analyticRepo.getAnaytics()
  return data;
};
