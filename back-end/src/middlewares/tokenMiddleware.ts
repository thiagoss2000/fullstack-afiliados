import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { checkToken } from "../services/authServices.js";

dotenv.config({ path: ".env" });

export async function validateToken (req: Request, res: Response, next: NextFunction){
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).send("Token not provided");
    await checkToken(authorization);

    const token = authorization.replace("Bearer ", "");
   
    const validateToken = jwt.verify(token, process.env.ENCRYPTPASSWORD);
    res.locals.user= validateToken
    next();  
}