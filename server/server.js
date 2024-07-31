import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config({path: "../.env"});

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)

// app.get('/', (req, res) => {
//     res.send("Hello World!");
// });

app.use("/api/auth", authRoutes);

app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`Server is active on port ${PORT}`)
}) 