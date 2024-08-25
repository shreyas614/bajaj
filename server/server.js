import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';  // Import CORS middleware

import path from 'path';
import { fileURLToPath } from "url";
// Resolving dirname for ES module
const
__filename = fileURLToPath(import.meta.url)
const __dirname = path. dirname (__filename)
console. log (__dirname);

dotenv.config();

const app = express();
const port =  4000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
    origin: "*" // Replace with your frontend origin
}));
;  // Enable CORS for all routes
app.use(bodyParser.json());

app.use (express.static(path.join(__dirname, '/client/dist')))
// Use Routes
app.use('/bfhl', userRoutes);

app. get ("*", (rea, res) =>
    res.sendFile(path.join (__dirname, "/client/dist/index.html"))
);
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
