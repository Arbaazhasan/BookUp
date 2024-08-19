import express, { urlencoded } from "express";
import { config } from "dotenv";
import { server } from "./server.js";
import { db_connect } from "./data/DatabaseConnection.js";
import errorMiddleware from "./middleware/Error.js";
import cors from 'cors';
import cookieParser from "cookie-parser";
import cloudinaryConfig from "./utils/cloudinary.js";



// Routes
import userRouter from './routes/guest.routes.js';
import vendorRouter from './routes/vendor.routes.js';
import roomRouter from './routes/room.routes.js';
import bookingRouter from './routes/booking.routes.js';



config({
    path: './data/config.env'
});


const app = express();

// express Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express(urlencoded({ extended: true })));

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET, POST, PATCH, DELETE',
    credentials: true
}
));




// Database Connection
db_connect();


// Application Routes
app.use('/api/v1/guest', userRouter);
app.use('/api/v1/booking', bookingRouter);
app.use('/api/v1/vendor', vendorRouter);
app.use('/api/v1/vendor/room', roomRouter);




cloudinaryConfig();


//  Server 
server(app);

// Error Middleware
app.use(errorMiddleware);