import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express();

// Middleware to handle cors
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173/",
    methods : ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Athorization"]
}))

// Middleware to handle JSON object in req body

export default app;