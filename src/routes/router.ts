import { Router } from "express";
import affiliatesRouter from "./affiliatesRouter.js";
import authRouter from "./authRouter.js";

const router = Router();

router.use(authRouter);
router.use(affiliatesRouter);

export default router;