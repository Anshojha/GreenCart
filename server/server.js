import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors'
import connectDB from './configs/db.js';
import 'dotenv/config'
import userRouter from './routes/userRoutes.js';

const app = express()

const port = process.env.PORT || 4000;

// Database connection
await connectDB()

// This will allowed  to access the multiple origin
const allowedOrigin = ['http://localhost:5173']

// Middleware configurtation
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin : allowedOrigin, credentials : true}))

app.get('/', (req, res) => res.send("API is working!! "))
app.use('/api/user', userRouter)


app.listen(port , ()=> {
    console.log(`Sever is serving successfully on http://localhost:${port}`)
})