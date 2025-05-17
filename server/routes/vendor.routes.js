import express from 'express';
import { getBookings, getVendor, updateBookingStatus, updateVendorProfile, vendorLogin, vendorLogout, vendorResigter } from '../controller/vendor.controller.js';
import { vendorAuthontication } from '../middleware/authontication.js';

const router = express.Router();

router.post('/register', vendorResigter);
router.post('/login', vendorLogin);
router.get('/logout', vendorLogout);
router.post('/getvendor', getVendor);

router.post('/getBookings', vendorAuthontication, getBookings);
router.post('/updatebookingstatus', updateBookingStatus);


router.patch('/updatevendorprofile', vendorAuthontication, updateVendorProfile);


export default router;