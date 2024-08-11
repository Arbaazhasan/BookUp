import express from "express";
import userLoginRouter from './routes/userLogin.routes.js';
import { config } from "dotenv";
import { server } from "./server.js";
import { db_connect } from "./data/DatabaseConnection.js";
import errorMiddleware from "./middleware/Error.js";



config({
    path: './data/config.env'
});



const app = express();

// Middleware

app.use(express.json());


// Database Connection
db_connect();


// Application Routes
app.use('/api/v1/user', userLoginRouter);


// Application Server 

server(app);

// Error Middleware

app.use(errorMiddleware);