import { Router } from "express";
import multer from "multer";
import dotenv from 'dotenv';
import sendData from "../controllers/affiliatesController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";
dotenv.config()

const local = multer({ dest: process.env.DATA_TEMP });

const affiliatesRouter = Router();

affiliatesRouter.post('/', validateToken, local.single('file'), sendData);

export default affiliatesRouter;