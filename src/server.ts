"use strict";
import "dotenv/config";
import "pretty-error";
import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
// const session = require("express-session");
import session from "express-session";
// const SequelizeStore = require("connect-session-sequelize")(session.Store);
// import SequelizeStore from "connect-session-sequelize" (session.Store)
import compression from "compression";
import hpp from "hpp";
import helmet from "helmet";
import log4js from "log4js";
import paginate from "express-paginate";
import dayjs from "dayjs";
// import { errorHandler } from ("./middleware/errorHandler");
// import db from ("./models");
const app: any = express();
const PORT: any = process.env.PORT || 3000;
const log = log4js.getLogger("entrypoint");
log.level = "info";

// * Security, Compression & Parser
app.use(helmet());
app.use(hpp());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * Http Logger
morgan.token("time", (req: Request) => {
  let user = "anonym";
  // if (req.session) {
  //   if (req.session) {
  //     user = req.session.name || "anonym";
  //   }
  // }
  const time = dayjs().format("h:mm:ss A") + " - " + user;
  return time;
});
app.use(morgan("morgan: [:time] :method :url - :status"));

// * Session Store
app.set("trust proxy", 1);
// app.use(
//   session({
//     secret: process.env.COOKIE_SECRET,
//     store: new SequelizeStore({
//       db: db.sequelize,
//       expiration: 384 * 60 * 60 * 1000, // 16 days in milisecond
//     }),
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 14 * 24 * 60 * 60 * 1000 }, // 14 days
//   })
// );

// * Paginate
app.use(paginate.middleware(10, 30));

// * Route
app.use(require("./routes"));

// * Custom Error Handler
// app.use(errorHandler);

// * Rolliing log (optional)

// * Server Listen
app.listen(PORT, (err: any) => {
  if (err) {
    log.error(`Error : ${err}`);
    process.exit(1);
  }
  log.warn(process.env.DB_NAME);
  log.info(`Server is Running On Port : ${PORT}`);
});

export default app;
