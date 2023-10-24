import express from "express"
import * as userController from "../../controllers/user"
import { body } from "express-validator"
const router = express.Router()

router.get("/users", userController.getUsers);
router.post(
    "/users",
    [
        body("email", "email is required").isEmail(),
    ],
    userController.addUser
);


export default router
