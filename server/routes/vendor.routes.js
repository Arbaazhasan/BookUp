import express from 'express';
import { getVendor, updateVendorProfile, vendorLogin, vendorLogout, vendorResigter } from '../controller/vendor.controller.js';
import { vendorAuthontication } from '../middleware/authontication.js';

const router = express.Router();

router.post('/register', vendorResigter);
router.post('/login', vendorLogin);
router.get('/logout', vendorLogout);
router.post('/getvendor', getVendor);

router.patch('/updatevendorprofile/:vendorId', vendorAuthontication, updateVendorProfile);


export default router;