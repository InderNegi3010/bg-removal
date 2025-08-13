import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import { configDotenv } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";


import userRouter from "./routes/userRoutes.js";
import imageRoter from "./routes/imageRoutes.js";

configDotenv();
const PORT = process.env.PORT || 4000;
const app = express();
connectDB();

// For ES Modules, get __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(express.json());
app.use(cors());

// Serve uploads folder publicly
app.use("/uploads", express.static(uploadsPath));

// Root API
app.get("/", (req, res) => {
    res.send("Inder is here");
});

app.use("/api/user", userRouter);
app.use("/api/image", imageRoter);

app.listen(PORT, () => console.log("✅ Server is running on port " + PORT));
