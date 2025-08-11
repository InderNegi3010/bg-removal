import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./configs/mongodb.js"
import { configDotenv } from "dotenv"
import userRouter from "./routes/userRoutes.js"

configDotenv()
const PORT  = process.env.PORT || 4000
const app = express()
connectDB()


// middlewers
app.use(express.json())
app.use(cors())

// Root Api
app.get("/" , (req,res) => {
    res.send("Inder is here")
})
app.use('/api/user', userRouter)

app.listen(PORT , () =>  console.log("✅ Sever is running on port " + PORT))