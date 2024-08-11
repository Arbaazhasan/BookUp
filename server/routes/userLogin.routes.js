import { logout, register, userLogin } from "../controller/user.Login.controller.js";
import express from 'express';

const router = express.Router();

router.post("/register", register);

router.post("/login", userLogin);

router.post("/logout", logout);


export default router;