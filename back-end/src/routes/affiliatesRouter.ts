import { Router } from "express";
import multer from "multer";
import sendData, { searchTransactions } from "../controllers/affiliatesController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const local = multer({ dest: 'uploads/' });

const affiliatesRouter = Router();

affiliatesRouter.post('/', validateToken, local.single('file'), sendData);
affiliatesRouter.get('/transactions', validateToken, searchTransactions);

export default affiliatesRouter;