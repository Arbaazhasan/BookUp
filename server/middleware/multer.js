import multer from "multer";


const storage = multer.memoryStorage();
const fileUpload = multer({ storage: storage }).array("files");


export default fileUpload;