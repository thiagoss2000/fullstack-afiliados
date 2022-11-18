import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { authSchema } from "../schemas/authSchema.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchema(authSchema), signUp);
authRouter.post("/sign-in", validateSchema(authSchema), signIn);

export default authRouter;