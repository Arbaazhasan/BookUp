import express from 'express';
import { vendorAuthontication } from '../middleware/authontication.js';
import fileUpload from '../middleware/multer.js';
import { addRoom, deleteRoom, getVendorRooms, searchRoom, updateRoom, updateRoomStatus } from '../controller/room.controller.js';

const router = express.Router();

router.get('/searchroom/:roomNo', vendorAuthontication, searchRoom);
router.post('/addroom', vendorAuthontication, fileUpload, addRoom);
router.patch('/updateroom', vendorAuthontication, fileUpload, updateRoom);
router.delete('/deleteroom/:roomNo', vendorAuthontication, deleteRoom);

router.patch('/updateroomstatus/:bookingId', vendorAuthontication, updateRoomStatus);
router.get('/getallrooms', vendorAuthontication, getVendorRooms);

export default router;