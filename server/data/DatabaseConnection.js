import mongoose from "mongoose";

export const db_connect = () => {
    mongoose.connect(process.env.MONGO_URI, { dbName: "BookUp" }).then(() => {
        console.log("Database Connected.");
    }).catch((error) => {
        console.log(`Error from MongoDb : ${error}`);
    });
};