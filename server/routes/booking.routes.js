import express from 'express';
import { bookRoom, cancelBooking, checkAvailability, getGuestBookings, searchRooms } from '../controller/booking.controller.js';
import { guestAuthontication } from '../middleware/authontication.js';

const router = express.Router();


router.post('/bookroom', bookRoom);
router.post('/searchrooms', searchRooms);
router.get('/guestbookings', guestAuthontication, getGuestBookings);
router.post('/cancelbooking/:bookingId', guestAuthontication, cancelBooking);
router.post("/checkavailability", guestAuthontication, checkAvailability);



export default router;