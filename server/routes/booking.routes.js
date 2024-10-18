import express from 'express';
import { bookRoom, cancelBooking, getGuestBookingRecords, getGuestBookings, searchRooms } from '../controller/booking.controller.js';
import { guestAuthontication } from '../middleware/authontication.js';

const router = express.Router();


router.post('/bookroom', bookRoom);
router.post('/searchrooms', searchRooms);
router.get('/guestbookings', guestAuthontication, getGuestBookings);
router.get('/guestbookingrecords', guestAuthontication, getGuestBookingRecords);
router.post('/cancelbooking/:bookingId', guestAuthontication, cancelBooking);



export default router;