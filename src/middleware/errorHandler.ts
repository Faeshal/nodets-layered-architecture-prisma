import { Request, Response, NextFunction } from "express";
import log4js from "log4js";
const log = log4js.getLogger("middleware:errorHandler");
log.level = "info";

// class ErrorResponse extends Error {
//   constructor(message: any, statusCode: any) {
//     super(message);
//     this.statusCode = statusCode;

//     Error.captureStackTrace(this, this.constructor);
//   }
// }

// interface ErrorResponse {
//   message?: string;
//   statusCode?: number;
// }
// const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
//   let error = { ...err };
//   error.message = err.message;
//   error.statusCode = err.statusCode;
//   log.warn(err);
//   res.status(error.statusCode || 500).json({
//     success: false,
//     message: error.message || "Server Error",
//   });
// };
// export { ErrorResponse, errorHandler };

interface Error {
  message?: string;
  statusCode?: number;
  name?: string
}


// interface ErrorResponse extends Error {
//   email: string,
//   after: number
// }

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  log.error(err);

  // let error = { ...err };
  // error.message = err.message;
  // error.statusCode = err.statusCode;

  const statusCode = err.statusCode || 500
  res.status(statusCode).send({ success: false, message: err.message });
};


export { Error, errorHandler };