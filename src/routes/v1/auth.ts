import express from "express"
import * as authController from "../../controllers/auth"
import { body } from "express-validator"
const router = express.Router()

router.post("/auth/login", authController.login);
router.post(
    "/auth/register",
    [
        body("email", "email is required").isEmail(),
        body("username", "username is required").not().isEmpty().trim(),
        body("password", "password is required").not().isEmpty().trim()
    ],
    authController.register
);


export default router
