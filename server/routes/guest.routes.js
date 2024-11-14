import { bookRoom } from "../controller/booking.controller.js";
import { getGuest, getRoomDetails, logout, register, userLogin } from "../controller/guestLogin.controller.js";
import express from 'express';
import { guestAuthontication } from "../middleware/authontication.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", userLogin);

router.post("/logout", logout);

router.post("/getguest", getGuest);

router.post("/bookroom", guestAuthontication, bookRoom);

router.get('/getRoomDetails/:id', getRoomDetails);


export default router;