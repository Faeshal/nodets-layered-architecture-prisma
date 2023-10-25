// import { Request } from 'express';
// // import User from 'users/user.interface';
// // interface user {
// //     userId: string;
// //     iat: string;
// // }
// interface RequestWithUser extends Request {
//     user: any;
// }
// export default RequestWithUser;
// interface TokenData {
//     userId: string;
//     iat: string;
// }

import { Express } from "express-serve-static-core";

declare module "express-serve-static-core" {
    interface Request {
        user: any;
    }
}