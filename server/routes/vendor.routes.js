import express from 'express';
import { vendorLogin, vendorLogout, vendorResigter } from '../controller/vendor.controller.js';
import { authontication } from '../middleware/authontication.js';
import { addRoom, deleteRoom, searchRoom, updateRoom } from '../controller/room.controller.js';
import fileUpload from '../middleware/multer.js';

const router = express.Router();

router.post('/register', vendorResigter);
router.post('/login', vendorLogin);
router.get('/logout', vendorLogout);



router.get('/searchroom/:roomNo', authontication, searchRoom);
router.post('/addroom', authontication, fileUpload, addRoom);
router.patch('/updateroom', authontication, fileUpload, updateRoom);
router.delete('/deleteroom/:roomNo', authontication, deleteRoom);


export default router;