import { bookRoom, checkAvailability } from "../controller/booking.controller.js";
import { getGuest, logout, register, userLogin } from "../controller/guestLogin.controller.js";
import express from 'express';
import { guestAuthontication } from "../middleware/authontication.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", userLogin);

router.post("/logout", logout);

router.post("/getguest", getGuest);

router.post("/bookroom", guestAuthontication, bookRoom);
router.post("/checkavailability", guestAuthontication, checkAvailability);


export default router;