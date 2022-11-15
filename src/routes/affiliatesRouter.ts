import { Router } from "express";
import multer from "multer";
const local = multer({ dest: 'uploads/' });

const affiliatesRouter = Router();

affiliatesRouter.post('/', local.single('file'));

export default affiliatesRouter;