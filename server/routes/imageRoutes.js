import express from "express"
import { removeBgImage } from "../controllers/ImageController.js"
import authUser from "../middlewears/auth.js"
import upload from "../middlewears/multer.js"

const imageRoter = express.Router()

imageRoter.post("/remove-bg", upload.single('image'), authUser, removeBgImage)

export default imageRoter